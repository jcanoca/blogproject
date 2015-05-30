# -*- coding: utf-8 -*-
"""
Created on Sun May  3 10:31:46 2015

@author: jccan
"""
from __future__ import division
import numpy as np
import pandas as pd
import time
import pymongo
import collections
import datetime
import os
import cPickle as cp

# Setting working directory
os.chdir('/Users/jccan/projects/KeywordExtraction/source')
#os.chdir('C:/Users/canofran/projects/KeywordExtraction/source')

# Files to build metrics
#
prefix = '2015129_01320_'
sufix  = '_tf_25_k_45'

#%%
fl_km = prefix + 'kmean' + sufix + '.pickle'
fl_labels2clusters = prefix + 'labels_to_clusters' + sufix + '.pkl'
fl_labels2rest = prefix + 'labels_to_rest_clusters' + sufix + '.pkl'
fl_labels2split = prefix + 'labels_to_split_clusters' + sufix + '.pkl'
#
#---------------------------------------------------------------------------#
def connect_to_mongodb(collection):

    #Connection to mongodb
    try:
        connection=pymongo.MongoClient()
        print "Connection to Mongo Daemon successful!!!"
    except pymongo.errors.ConnectionFailure, e:
        print  "Could not connect to MongoDB: %s" % e
        # Obtenim la BD del Congrés
    return connection[collection]
#---------------------------------------------------------------------------#
def get_keywords_docs():
    
    t0 = time.time()
    
    db = connect_to_mongodb('congres')

    vocabulary = collections.Counter()

    start_date = "01/09/2000"
    start_date = datetime.datetime.strptime(start_date, "%d/%m/%Y")

    doc_col = db['document']

    doc_start_date = "01/09/2000"
    d_doc_start_date = datetime.datetime.strptime(doc_start_date, "%d/%m/%Y")
    doc_end_date = "01/04/2015"
    d_doc_end_date = datetime.datetime.strptime(doc_end_date, "%d/%m/%Y")

    result = doc_col.find({'date': {'$gte': d_doc_start_date, 
                                    '$lte': d_doc_end_date}}).sort('date',1)

    dframe = [] # Future metric table
    docs_keywords = []


    if result.count() > 0:
    
        docs_keywords = [] 
        for doc in result:

            num_lines_question = 0
        
            for dialogo in doc['session_dictionary']:
                ks = []
                keyws = []            
            
                for keyword in dialogo['keywords']:
                    ks.append(keyword[0])
                    keyws.append(keyword[0])
                
                vocabulary.update(ks)
            
                if dialogo['question'] == '':
                    num_lines_question = 0
                else:
                    num_lines_question = len(dialogo['question'].split('\n'))
                
                num_lines_intervention = 0
            
                for intervencion in dialogo['intervention_dictionary']:
                    ks = []
                    for keyword in intervencion['keywords']:
                        ks.append(keyword[0])
                        keyws.append(keyword[0])
                    
                    vocabulary.update(ks)    
                
                docs_keywords.append(keyws)
            
                if intervencion['text'] == '':
                    num_lines_intervention = 0
                else:
                    num_lines_intervention += \
                    len(intervencion['text'].split('\n'))
            
                dframe.append( (doc['date'], dialogo['num_exp'],
                            (num_lines_question + num_lines_intervention)))

    
    return (docs_keywords, vocabulary, dframe)


# Populating new columns from df_aux: 'question, 'month', 'year', 'num_lines', 'num_words',...
# month and year

# From mongodb we build a list of lists of keywords form docs
docs_keywords, vocabulary, dframe = get_keywords_docs()


# Auxiliar DataFrame
df_aux = pd.DataFrame(dframe,columns=['date', 'num_exp','num_lines'])


# Load k-mean model
with open('./files/' + fl_km) as handle:
    km = cp.load(handle)
    
   
#doc_in_cluster_list = []
#for doc_index, doc_in_cluster_index in enumerate(km.labels_):
#    doc_in_cluster_list.append((df_aux.ix[doc_index, 'date'], 
#                                doc_in_cluster_index))
#                            
df = pd.DataFrame()

   
df['date'] = df_aux['date'].copy()
df['cluster'] = km.labels_


s = df_aux['date']
tm = s[:]
 
df['month'] = [t.month for t in tm]
df['year']  = [t.year for t in tm]


# Copying some metrics
df['num_lines'] = df_aux['num_lines'].copy()


# Initialize metrics
df['weight_lines'] = 0

# Tabla por año/mes de DataFrame con num_lines, num_words 
df_year_month = df.groupby(['year','month']).sum()[['num_lines']]

for row in range(len(df['num_lines'])):
    num_lines =  df.ix[row,'num_lines']
    year = df.ix[row,'year']
    month = df.ix[row,'month']
    df.ix[row,'weight_lines'] = \
                     num_lines / df_year_month.loc[year, month].num_lines   


# Tabla por year-month, cada fila tiene el peso de los tópicos de ese mes 
# (suma=1)



# Open DataFrame files to build metrics
df_labels_clusters       = pd.read_pickle('./files/'+ fl_labels2clusters)
df_labels_rest_clusters  = pd.read_pickle('./files/'+ fl_labels2rest) 
df_labels_split_clusters = pd.read_pickle('./files/'+ fl_labels2split)

# Dictionary topic -> main cluster
dict_idx_cis = {}
for index, topic in enumerate(df_labels_clusters[u'CIS_topic']):
    dict_idx_cis[topic] =  index

dict_idx_cis[u'otros'] = 18  # 'otros'

# Build dictionary of labels-clusters
dict_clusters = {}

# From labels_clusters                                 

key   = df_labels_clusters[u'Cluster_number']
value = df_labels_clusters[u'CIS_topic']
for k, v in zip(key, value):
    dict_clusters[k] = v

# dict of pure clusters
pure_clusters = {}
value   = df_labels_clusters[u'Cluster_number']
key = df_labels_clusters[u'CIS_topic']
for k, v in zip(key, value):
    pure_clusters[k] = v

# From labels_rest_clusters                                 
    
key   = df_labels_rest_clusters[u'Cluster']
value = df_labels_rest_clusters[u'CIS_topic']
for k, v in zip(key, value):
    dict_clusters[k] = v

# From labels_split_clusters        
maxc = max(dict_clusters.keys()) + 1
                         
value = df_labels_split_clusters[u'CIS_topic']
for k,v in enumerate(value):
    dict_clusters[k+maxc] =  v

# Update df['cluster']
idx_docs  = df_labels_split_clusters[u'Idx_docs']
CIS_topic = df_labels_split_clusters[u'CIS_topic']

for idx, topic in zip(idx_docs, CIS_topic):
    for ele in idx:
        #print ele, topic
        df.loc[ele,u'cluster'] = pure_clusters[topic]

df['new_cluster']  = map(lambda x: dict_idx_cis[dict_clusters[x]],
                                                        df['cluster'])
df['pure_cluster'] = map(lambda x: pure_clusters[dict_clusters[x]],
                                                        df['cluster'])


df['label'] = map(lambda x: dict_clusters[x], df['cluster'])


cluster2kw = {}
key = df_labels_clusters[u"Cluster_number"]
value = df_labels_clusters[u"Cluster's top terms"]
for k,v in zip(key, value):
    cluster2kw[k] = v

df['keywords'] = map(lambda x: cluster2kw[x], df['pure_cluster'])

df_pablo = pd.DataFrame()
df_pablo['date']     = df['date'].copy()
df_pablo['label']    = df['label'].copy()
df_pablo['keywords'] = df['keywords'].copy()

df_pablo.to_pickle("./files/"+prefix+"df2pablo"+sufix+".pkl")
#df3 = pd.read_pickle("./files/"+prefix+"df2pablo.pickle")

df.drop("keywords",axis=1, inplace=True)
df.drop("label",axis=1, inplace=True)
df.drop("cluster",axis=1, inplace=True)

# Tabla por año/mes/new_clusters (3 índices)
df_year_month_2 = df.groupby(['year',
                              'month',
                              'new_cluster']).sum()[['num_lines',
                                                     'weight_lines']]


num_months = len(df_year_month)

label_clusters = dict_idx_cis.keys()

df_by_months = pd.DataFrame(index=range(num_months), 
                            columns=['Year', 'Month'] + label_clusters)

year_ant = 0
month_ant = 0
j = -1
for ( (year, month, cluster), row) in df_year_month_2.iterrows():
    if year_ant == year and month_ant == month:
        pass
    else:
        j = j +1 
    
    year_ant = year
    month_ant = month
    
    #topic = dict_clusters[cluster]
    df_by_months.ix[j, 0] = year
    df_by_months.ix[j, 1] = month
    df_by_months.ix[j, cluster+2] = row.weight_lines

# Convertimos los NaN a 0
df_by_months = df_by_months.fillna(0)

#%%
# CHECK THE RESULT
total = 0
for i in range(num_months):
    total = total + (np.sum(df_by_months.iloc[i,2:]))

# Must be "True"
print total == num_months

#%%
# Interpolar tabla metricas

years_ = range(2000,2016)
d_ = {2000:[9,10,11,12],
      2001:[1,2,3,4,5,6,7,9,10,11,12],
      2002:[1,2,3,4,5,6,7,9,10,11,12],
      2003:[1,2,3,4,5,6,7,9,10,11,12],
      2004:[1,2,3,4,5,6,7,9,10,11,12],
      2005:[1,2,3,4,5,6,7,9,10,11,12],
      2006:[1,2,3,4,5,6,7,9,10,11,12],
      2007:[1,2,3,4,5,6,7,9,10,11,12],
      2008:[1,2,3,4,5,6,7,9,10,11,12],
      2009:[1,2,3,4,5,6,7,9,10,11,12],
      2010:[1,2,3,4,5,6,7,9,10,11,12],
      2011:[1,2,3,4,5,6,7,9,10,11,12],
      2012:[1,2,3,4,5,6,7,9,10,11,12],
      2013:[1,2,3,4,5,6,7,9,10,11,12],
      2014:[1,2,3,4,5,6,7,9,10,11,12],
      2015:[1,2,3] 
}    
y_ant = 2000
m_ant = 9
for y in years_:
    #print "year: ", y
    for m in d_[y]:
        #print "month: ", m
        res = df_by_months[(df_by_months['Year'] == y) & 
                           (df_by_months['Month'] == m)]
        if len(res) == 0:
            #print "year not found: ", y
            #print "month not found: ", m
            # Add row
            row_values = []
            # read the row before
            #print "y_ant = ", y_ant
            #print "m_ant = ", m_ant
            row_b = df_by_months[(df_by_months['Year']  == y_ant) & 
                                 (df_by_months['Month'] == m_ant)]
            # read the row after
            row_not_found = 'N'
            m_nxt = m
            y_nxt = y
            while row_not_found == 'N':
                if m_nxt == 12:
                    m_nxt = 1
                    y_nxt = y_nxt + 1
                else:
                    m_nxt = m_nxt + 1
                    if m_nxt == 8:
                        m_nxt = m_nxt + 1
                    y_nxt = y
                #print "y_nxt = ", y_nxt
                #print "m_nxt = ", m_nxt
                row_a = df_by_months[(df_by_months['Year']  == y_nxt) & 
                                     (df_by_months['Month'] == m_nxt)]
                if len(row_a) == 0:
                    row_not_found = 'N'
                    if m_nxt > 2015:
                        row_not_found = 'X'
                else:
                    row_not_found = 'S'
            if row_not_found == 'X':
                print "ERROR GRAVE A REVISAR"
            else:
                row_values = (row_a.values + row_b.values) / 2.0
                
                row_values[0][0] = y
                row_values[0][1] = m
                df_by_months.loc[max(df_by_months.index) + 1] = row_values[0]
                df_by_months = df_by_months.sort(columns=['Year','Month'])
                print "fila insertada!", y, m
                y_ant = y 
                m_ant = m
        else:
            #print "Fila trobada"
            #print "y= ", y
            #print "m= ", m
            
            y_ant = y 
            m_ant = m
            

ddd = df_by_months.sort(columns=['Year','Month'])
total = 0
for i in range(len(ddd)):
    total = total + (np.sum(ddd.iloc[i,2:]))
#%%
# Must be "True"
print total == len(ddd)
if total == len(ddd):
    df_by_months = ddd       
    
#%%
# Grabamos la tabla en csv y pickle
df_by_months.to_csv("./files/"+prefix+"metric_table_by_months"+sufix+".csv", encoding='utf-8', sep=";")    
import cPickle as cp
with open("./files/"+prefix+"df_by_months"+sufix+".pickle", 'wb') as handle:
    cp.dump(df_by_months, handle)