# -*- coding: utf-8 -*-
"""
Created on Fri May 29 07:45:31 2015

@author: jccan
"""


from __future__ import division
import os
import logging
import pymongo
import collections
import datetime
import time
import copy
import pandas as pd
import numpy as np
import cPickle as cp

from sklearn.feature_extraction.text import TfidfTransformer
from sklearn.cluster import KMeans
from collections import Counter

from my_funtions import *


logging.basicConfig(format='%(asctime)s : %(levelname)s : %(message)s', 
                    level=logging.INFO)

# Setting working directory
os.chdir(os.getcwd())
print os.getcwd()        

##############################################################################
# MAIN PROGRAM
##############################################################################
t0 = time.time()

N = 100  # Number of experiments to perform
limits = 25
nc = 45
ntop = 20  #  n top terms for each cluster

print "limits = ", limits
print "num of clusters = ", nc
print "num top terms per cluster = ", ntop

# Flag to save objects as pickle files
persistence = 1  # 1: activate 0: deactivate

# Prefix for file names
t = time.localtime()
data_file = (str(t.tm_year) + str(t.tm_yday) + '_' +
             str(t.tm_hour) + str(t.tm_min) + str(t.tm_sec))

log = 0

# We start from the sparse matrix we worked out before
df_matrix = pd.read_pickle('./files/2015129_01320_matrix_docs_features_tf_25.pickle')
feature_names = df_matrix.columns

# DataFrame --> numpy ndarray
B = df_matrix.values

# Get tfidf coefficients matrix
X = get_tfidf_matrix(B)    
      
# Each column is a document and each row is an experiment
df_outcome_matrix = pd.DataFrame(columns=range(7000))


# Initialize dictionaries
top_terms_per_cluster = {}
num_docs_per_cluster = {}
clusters_CIS = {}
tupla = {}
silhouette_avg = {}
samples_silhouette_values = {}
labeled_split_clusters = {}
labeled_rest_clusters = {}
split_bc = {}

ii = 0
tries = 0
while ii < N:
       
    print "Iteracion: ", ii        
    # For each vocabulary we work out its k-means model
    km = get_kmean_model(X, nc)
    # Save the k-mean model
    silhouette_avg[ii], samples_silhouette_values[ii] = \
       get_silhouette_scores(X, km, nc)
        
    # Get top ntop terms per cluster in a list
    (top_terms_per_cluster[ii], 
     num_docs_per_cluster[ii])  = get_top_n_terms_per_cluster(km,
                                                              feature_names,
                                                              nc, 
                                                              ntop)
    # Mapping CIS' labels to k-clusters (dict of lists)
    labels_CIS, clusters_CIS[ii] = mapping_CIS_to_clusters(km,
                                                           feature_names,
                                                           df_matrix)
    
    d={}
    for posi, label in enumerate(labels_CIS):
        d[label] = posi                                                                 
        
    tupla[ii] = zip(labels_CIS, clusters_CIS[ii],
                    (num_docs_per_cluster[ii][x]
                                       for x in clusters_CIS[ii]),
                    (top_terms_per_cluster[ii][x] 
                                       for x in clusters_CIS[ii]))
                                             
    labeled_rest_clusters[ii] = label_rest_clusters(top_terms_per_cluster[ii],
                                           clusters_CIS[ii],
                                           km)            
            
    split_bc[ii] = split_cluster(df_matrix, km.labels_, k=4)
            
    labeled_split_clusters[ii] = label_split_clusters(split_bc[ii])

    # detect "big" cluster            
    rc = detect_bc_in_pure_cluster(clusters_CIS[ii], km.labels_)
    
    print "rc -> ", rc
    
    if rc == True:
        print "Iteration ", ii
        print "Not valid! New try!"
        tries +=1
        assert tries < 40, "Something happened!"
    else:
        tries = 0  # reset number of possible tries
        
        dict_cluster2label = {}        
        
        lrc = [(x,y) for _,x,y in labeled_rest_clusters[ii]]
        for ele in lrc:
            # ele[0] is a cluster
            # ele[1] is the label
            dict_cluster2label[ele[0]] = ele[1]
        
        lt = [(y,x) for x,y, _, _ in tupla[ii]]
        for ele in lt:
            # ele[0] is a cluster
            # ele[1] is the label
            dict_cluster2label[ele[0]] = ele[1]

       
        doc_label = {} # fila al pandas df_outcome_matrix
        
        lsc = [(l,y) for _, l, y in labeled_split_clusters[ii]]
        for ele in lsc:
            # ele[0] is a list of documents
            # ele[1] is the label
            for doc in ele[0]:
                doc_label[doc] = d[label]
        
        for doc, ncluster in enumerate(km.labels_):
            if doc in doc_label:
                pass
            else:
                doc_label[doc] = d[dict_cluster2label[ncluster]]
        
        # Add new row
        df_outcome_matrix.loc[ii] = doc_label
        ii +=1    

print "Done in %fs" % (time.time() - t0)