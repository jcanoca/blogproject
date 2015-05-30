# -*- coding: utf-8 -*-
"""
Created on Thu May 07 08:13:32 2015

@author: canofran
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

from sklearn.metrics import silhouette_samples, silhouette_score
from sklearn.feature_extraction.text import TfidfTransformer
from sklearn.cluster import KMeans
from collections import Counter, defaultdict

#############################################################################
#                                 FUNCTIONS                                 #
#############################################################################
#---------------------------------------------------------------------------#
def save_object(obj, name):
    file_name = './files/' + name + '.pickle'
    with open(file_name, 'wb') as handle:
        cp.dump(obj, handle) 
#---------------------------------------------------------------------------#
def load_object(name):
    file_name = './files/' + name + '.pickle'
    with open(file_name, 'rb') as handle:
        return cp.load (handle) 
#---------------------------------------------------------------------------#
def connect_to_mongodb(collection):

    #Connection to mongodb
    try:
        connection=pymongo.MongoClient()
        print "Connection to Mongo Daemon successful!!!"
    except pymongo.errors.ConnectionFailure, e:
        print "Could not connect to MongoDB: %s" % e
        # Obtenim la BD del Congrés
    return connection[collection]
#---------------------------------------------------------------------------#
def get_keywords_docs():
    
    db = connect_to_mongodb('congres')
    print "Collections : ", db.collection_names()

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

    print "docs recuperados: %d " % result.count() 
    
    print "Fecha inicio: %s" % doc_start_date
    
    print "Fecha fin: %s" % doc_end_date
    
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
                           
    print "Number of documents: %d" % len(docs_keywords)

    print "Number of keywords found: %d" % len(vocabulary)


    
    
    return (docs_keywords, vocabulary, dframe)
#---------------------------------------------------------------------------#
# Work out term-frequency matrix (B)
#   docs_keywords = [[kws doc1], [kws doc2],...[kw docN]]
#   vocabulary = [kw1, kw2,..., kwM]
def build_tf_matrix(docs_keywords, vocabulary):

   
    matrix_kw_doc = []
    stop_keywords = get_stop_keywords()
    for doc_kw in docs_keywords:
        count_kw = Counter()
        for k in doc_kw:
            if k in vocabulary and k not in stop_keywords:
                count_kw[k] +=1
        matrix_kw_doc.append(count_kw)

    #matrix_docs_features = pd.DataFrame(matrix_kw_doc).fillna(0) # nan --> 0
    matrix_docs_features = pd.DataFrame(matrix_kw_doc,
                                        index=range(len(docs_keywords)), 
                                        columns=vocabulary).fillna(0) 
    
    
    #DataFrame object
    return matrix_docs_features
    
#---------------------------------------------------------------------------#
# List of useless keywords 

def get_stop_keywords():
    stop_keywords = [u'pérez rubalcaba', u'rumores', u'sector', 
                     u'larga duración',u'ruego guarden silencio',
                     u'cuántas', u'consideración', u'absoluta claridad',
                     u'absoluta franqueza', u'absoluta certeza',
                     u'abro comillas', u'abril',u'medidas adoptadas',
                     u'seamos conscientes',u'medidas adoptadas',
                     u'seamos conscientes',u'mecanismos necesarios',
                     u'agosto',u'elementos básicos',u'récord histórico',
                     u'dirección correcta',u'lópez i chamosa',u'funciones',
                     u'medidas',u'acuerdo',u'alcaraz masats',
                     u'opinión pública',
                     u'respuesta',u'absoluta falta',u'acciones específicas',
                     u'acciones necesarias',u'dudoso honor',
                     u'estudio informativo',u'comunidades autónomas',
                     u'políticas activas',u'rodríguez zapatero',
                     u'zapatero',u'josé luis rodríguez zapatero',
                     u'gil lázaro',u'comunidad autónoma', u'actuaciones',   
                     u'gestión', u'real decreto', u'ley',
                     u'plan',u'sistema',
                     u'comisión europea', u'unión europea', u'políticas',
                     u'reforma', u'sociedad española', u'política', 
                     u'estados miembros', u'unión', u'países', 
                     u'parlamento europeo', u'consejo europeo', u'comisión',
                     u'ley orgánica', u'personas', u'plan estatal', 
                     u'disposición adicional', u'información pública',
                     u'hectómetros cúbicos', u'presidencia española',
                     u'proyecto', u'españa', u'dirección general', 
                     u'situación', u'relación',u'valoración',
                     u'interés general', u'información', u'consejo',
                     u'caso']
                     
    return stop_keywords

#---------------------------------------------------------------------------#
# Get dictionary of labels from CIS
 
def get_dict_CIS():
    # Label's dictionary from CIS

#    dict_cis = {u'empleo':
#                   [u'laboral', u'paro', u'desempleo', u'precariedad', 
#                    u'ocupación', u'trabajo', u'reforma laboral',
#                    u'diálogo social', u'negociación colectiva',
#                    u'mercado laboral', u'agentes sociales',
#                    u'interlocutores sociales', u'empleo'],
#               u'salud':
#                   [u'sanidad', u'hospital', u'ébola', u'vacas locas',
#                    u'gripe', u'vacunas', u'atención primaria',
#                    u'médico', u'enfermero', u'sanitario', u'lista espera',
#                    u'urgencias', u'medicina', u'salud', u'sanidad pública',
#                    u'salud pública', u'profesionales sanitarios',
#                    u'sistema sanitario', u'asistenacia sanitaria',
#                    u'sistema nacional', u'consejo interterritorial',
#                    u'salud'],
#               u'terrorismo':
#                   [u'eta',u'al qaeda', u'isis',u'atentado',
#                    u'bomba',u'víctimas', u'11M', u'11S', u'terror', 
#                    u'secuestro', u'paz', u'desarme', u'tregua', 
#                    u'armado', u'política antiterrorista', u'país vasco',
#                    u'terrorismo', u'terroristas', u'batasuna', 
#                    u'banda terrorista', u'lucha antiterrorista',
#                    u'juana chaos'],
#               u'jóvenes':
#                   [u'jóvenes', u'juventud', u'ocio', u'sexo', u'drogas', 
#                    u'discoteca', u'balconing', u'paro juvenil',
#                    u'jóvenes españoles', u'juvenil', u'desempleo juvenil',
#                    u'garantía juvenil', u'jóvenes menores'],
#               u'vivienda':
#                   [u'vivienda', u'vivienda protegida', u'viviendas',
#                    u'hipoteca', u'protección oficial', 
#                    u'viviendas protegidas', u'suelo', 'vivienda libre',
#                    u'alquiler', u'desahucio', u'ocupa', u'euribor',
#                    u'cláusula suelo', u'cláusulas suelo', u'desahucios',
#                    u'suelo público', u'vivienda digna', 
#                    u'mercado inmobiliario'],
#               u'economía':
#                   [u'euro', u'iva', u'impuestos', u'pensiones', 
#                    u'banco',u'renta', u'rescate', u'crisis económica',
#                    u'reforma fiscal', u'medianas empresas', 
#                    u'política económica', u'crisis', 
#                    u'personas físicas', u'entidades financieras',
#                    u'sistema financiero', u'crecimiento económico',
#                    u'deuda', u'deuda pública', u'déficit público'
#                    u'déficit', u'estabilidad presupuestaria',
#                    u'fondo monetario internacional',u'zona euro',
#                    u'empresas', u'i d i', u'i d', 
#                    u'industria', u'industrial', 
#                    u'política industrial', u'empresas españolas',
#                    u'economía española', u'crecimiento', u'presupuestos',
#                    u'presupuestos generales',u'inversiones', u'inversión'
#                    u'inversiones públicas', u'economía'],
#               u'medio ambiente':
#                   [u'agricultura', u'ganaderia', u'pesca',
#                    u'ecología', u'parque', u'reciclaje',
#                    u'sostenibilidad', u'emisiones', u'energía',
#                    u'energías renovables', u'nuclear', u'solar',
#                    u'contaminación', u'calentamiento global',
#                    u'incendio', u'inundación', u'cambio climático',
#                    u'plan hidrológico nacional',
#                    u'agua', u'impacto ambiental', u'hectómetros cúbicos',
#                    u'seguridad nuclear', u'política energética',
#                    u'central nuclear', u'centrales nucleares',
#                    u'eficiencia energética', u'desarrollo sostenible'
#                    u'confederación hidrográfica', u'medio rural',
#                    u'medio ambiente'],
#               u'educación':
#                   [u'universidad', u'logse', u'leru', u'bolonia', 
#                    u'estudiante', u'profesor', u'informe pisa',
#                    u'bachillerato', u'becas',u'wert',u'selectividad',
#                    u'examen',u'abandono escolar', u'sistema educativo',
#                    u'universidades', u'estudiantes', u'espacio europeo',
#                    u'formación profesional', u'educación superior',
#                    u'universidad española', u'educación infantil',
#                    u'educación pública', u'fracaso escolar',
#                    u'comunidad educativa',u'política educativa',
#                    u'educación'],
#               u'servicios públicos e infraestructuras':
#                   [u'correos', u'ave', u'administraciones públicas'
#                    u'aena', u'tren', u'aeropuerto', u'puerto',
#                    u'transporte', u'autopista', u'peaje', u'cercanías',
#                    u'corredor mediterraneo', u'taxi',
#                    u'taxista',u'carretera', u'fomento', 
#                    u'línea', u'alta velocidad',
#                    u'tramo', u'obras', u'corredor', u'televisión pública',
#                    u'televisión española', u'radiotelevisión española',
#                    u'servicios públicos', u'infraestructuras',
#                    u'red convencional'],
#               u'corrupción':
#                   [u'fraude', u'caja b', u'tesorero', 
#                    u'regeneración democrática',u'corrupción política',
#                    u'paraísos fiscales', u'amnistía fiscal', 
#                    u'fraude fiscal', u'corrupción'],
#               u'inseguridad ciudadana':
#                   [u'antidisturbios',u'crimen',u'extorsión',u'delincuencia',
#                    u'crimen organizado',u'violación', u'seguridad',
#                    u'seguridad ciudadana', u'interior', u'policía',
#                    u'guardia civil', u'guardia civiles', 
#                    u'cuerpo nacional', u'policía nacional',
#                    u'policía judicial', u'inseguridad ciudadana'],
#               u'justicia':
#                   [u'tribunal', u'excarcelación', u'juzgados', u'presos',
#                    u'preso', u'juzgado', u'excarcelaciones', u'fiscalía',
#                    u'abogado', u'fiscal', u'fiscal general', u'tribunal',
#                    u'fiscalía general', u'consejo fiscal', 
#                    u'poder judicial',
#                    u'tribunal constitucional', u'tribunal supremo',
#                    u'audiencia nacional', u'enjuiciamiento criminal',
#                    u'secretarios judiciales', u'justicia gratuita',
#                    u'enjuiciamiento criminal', u'código penal',u'justicia'],
#               u'ideología':
#                   [u'ideología', u'monarquía', u'independencia',u'religión',
#                    u'nacionalismo', u'república', u'extrema derecha'],
#               u'social':
#                   [u'drogas', u'racismo', u'inmigración', u'inmigrantes', 
#                    u'violencia doméstica', u'derechos fundamentales',
#                    u'violencia género', u'aborto', u'pobreza infantil',
#                    u'homosexualidad', u'gay', u'lesbiana', u'adopción',
#                    u'derechos', u'ciudadanos', u'malos tratos',
#                    u'mujeres víctimas', u'igualdad', u'violencia',
#                    u'ley integral', u'mujeres', u'pobreza',
#                    u'servicios sociales', u'políticas sociales',
#                    u'gasto social', u'política social',
#                    u'personas dependientes', u'exclusión social'],
#                u'internacional': 
#                   [u'embajada', u'países', u'tratado',
#                   u'acciones diplomáticas correspondientes', 
#                   u'índices europeos', u'órganos europeos', 
#                   u'órganos internacionales',u'órgano regulador europeo',
#                   u'cooperación', u'franceses', u'ámbito internacional',
#                   u'área  internacional' , u'área iberoamericana' , 
#                   u'área latinoamericana' , u'área islámica', 
#                   u'área internacional' , u'área otan' ,
#                   u'ámbitos internacionales', u'ámbito euro africano',
#                   u'ámbito iberoamericano', u'ámbito europeo', u'áfrica',
#                   u'ámbito diplomático', u'áfrica occidental subsahariana',
#                   u'áfrica subsahariana', u'áfrica occidental', 
#                   u'áfrica negra', u'áfrica suboccidental', 
#                   u'africa profunda', u'consulado', u'tratados',
#                   u'iberoamérica', u'internacional', u'internacionales',
#                   u'estados miembros', u'internacional', u'europa',
#                   u'asuntos exteriores', u'cooperación', u'cumbre', 
#                   u'cooperación internacional', u'presidencia',
#                   u'américa latina', u'cumbre iberoamericana', 
#                   u'comunidad iberoamericana'],
#                u'tecnologia e investigación': 
#                  [u'tecnologías', u'investigadores',u'científico',
#                   u'actividad científica española', u'actividad científica',
#                   u'élite científica', u'élites científicas', 
#                   u'áreas tecnológicas', u'tecnológicos', 
#                   u'ámbito tecnológico', u'ámbitos tecnológicos',
#                   u'tecnología', u'ámbito científico', u'científicas',
#                   u'digitalización', u'investigación', u'tecnológico',
#                   u'tecnológica', u'innovación', 
#                   u'investigación científica', u'desarrollo tecnológico',
#                   u'investigación biomédica', u'investigación básica',
#                   u'comunidad científica',u'tecnología',u'proyectos',
#                   u'ciencia', u'investigaciones científicas',
#                   u'científicos', u'política científica'],
#                u'cultura':  
#                  [u'culturales', u'cultura', u'castellano',
#                  u'actividad artística', u'actores', 
#                  u'acontecimiento cultural', u'literatura', 
#                  u'acciones culturales', 'ámbito cultural', 
#                  u'ámbitos culturales', u'acción cultural', u'lectura',
#                  u'política cultural', u'museo', u'fundación', u'deporte',
#                  u'federación española', u'entidades']
#            } 
    with open('./dict_cis_merge.pickle', 'rb') as handle:
        dict_cis = cp.load(handle) 
    
    dict_cis[u'ideología'].extend([u'guerra civil',
                                   u'memoria histórica',
                                   u'archivo',
                                   u'guerra',
                                   u'memoria',
                                   u'documentos',
                                   u'reconocimiento',
                                   u'documentación',
                                   u'nacionalista vasco',
                                   u'nacionalidad española',
                                   u'instituciones',
                                   u'generalitat',
                                   u'valores democráticos'])
                                   
    dict_cis[u'fuerzas armadas'] = [u'fuerzas armadas',
                                    u'defensa',
                                    u'militares',
                                    u'defensa nacional',
                                    u'seguridad',
                                    u'misión',
                                    u'fuerzas armadas españolas',
                                    u'tropas',
                                    u'militar',
                                    u'maniobras militares',
                                    u'tropas españolas',
                                    u'alianza atlántica',
                                    u'ejército',
                                    u'servicio militar obligatorio',
                                    u'soldados españoles',
                                    u'cuarteles generales',
                                    u'soldados',
                                    u'armada española',
                                    u'buques']
    
    return dict_cis
#---------------------------------------------------------------------------#
#    
def get_dict_limits_and_vocabulary(limits, c_vocabulary):
    
    d_limit = {}
    d_lists_of_vocabulary = {}
    
    for limit in limits:
        to_filter = []
        for k in c_vocabulary:
            if c_vocabulary[k] < limit:
                to_filter.append(k)
              
        for k in to_filter:
            del c_vocabulary[k]
     
        d_limit[limit] = len(c_vocabulary)
        # Save different vocabularies    
        d_lists_of_vocabulary[limit] = c_vocabulary
        
    return (d_limit, d_lists_of_vocabulary)
#---------------------------------------------------------------------------#
#    
def get_tfidf_matrix(B):

    vectorizer = TfidfTransformer(norm=u'l2', use_idf=True, 
                                  smooth_idf=True, sublinear_tf=False)
    X = vectorizer.fit_transform(B)
    
    return X
#---------------------------------------------------------------------------#
#    
def get_kmean_model(X, true_k, n_init=10, verbose=False):
    
   
    km = KMeans(n_clusters=true_k, init='k-means++', max_iter=100,
                n_init=n_init, verbose=verbose)


    km.fit_transform(X)
   
    
    return km
#---------------------------------------------------------------------------#
#    
def get_top_n_terms_per_cluster(km, feature_names, true_k, top=10):
    terms = feature_names
    order_centroids = km.cluster_centers_.argsort()[:, ::-1]

    top_n_terms = []
    num_docs_per_cluster = Counter()

    for num_cluster in km.labels_:
        num_docs_per_cluster[num_cluster] += 1
        
    for i in range(true_k):
        top_n_terms.append([terms[ind] for ind in order_centroids[i,:top]])

    return top_n_terms, num_docs_per_cluster, 
#---------------------------------------------------------------------------#
# 
def mapping_CIS_to_clusters(km, feature_names, matrix_docs_features):

    dict_cis = get_dict_CIS()

    cis_vectors = []
    labels_cis = []
    for topic in dict_cis:
        cis_vectors.append(dict_cis[topic])
        labels_cis.append(topic)
    # Build vector matrix from cis_vectors
    matrix_vectors = []
    for vector in cis_vectors:
        # Initialize a vector from feature space
        vector_kw_doc = np.zeros((len(feature_names)))
        
        for kw in vector:
            if kw in matrix_docs_features.columns:
                pos = matrix_docs_features.columns.get_loc(kw)
                vector_kw_doc[pos] += 1
                
        matrix_vectors.append(vector_kw_doc)
    
    # Work out nearest cluster for every cis_vector
    vectorizer = TfidfTransformer(norm=u'l2', use_idf=True, smooth_idf=True, 
                                  sublinear_tf=False)
    X = vectorizer.fit_transform(matrix_vectors)
    
    # Retorn labels for each vector
    return (labels_cis, km.predict(X))
#---------------------------------------------------------------------------#
#
def get_silhouette_scores(X, km, nc):
    
    # The silhouette_score gives the average value for all the samples.
    # This gives a perspective into the density and separation of the formed
    # clusters
    cluster_labels = km.labels_
    silhouette_avg = silhouette_score(X, cluster_labels)
    #print ("For n_clusters =" + str(nc) + "The average silhouette_score is :"
    #      + str(silhouette_avg))

    # Compute the silhouette scores for each sample
    sample_silhouette_values = silhouette_samples(X, cluster_labels)
    
    return silhouette_avg, sample_silhouette_values

#---------------------------------------------------------------------------#
#
def detect_big_cluster(labels):
    
    count_docs_per_cluster = Counter()
    for doc in labels:
        count_docs_per_cluster[doc] +=1    
    
    #print "count_docs= ",count_docs_per_cluster
    cluster_max_docs = count_docs_per_cluster.most_common(1)[0][0]
    #print "Num cluster with max elements: ", cluster_max_docs    
    #print "Number of documments: ", count_docs_per_cluster[cluster_max_docs]
    
    # Mean and std values
    vector = np.array(count_docs_per_cluster.values())
    z = (  vector.max()  - vector.mean()) / vector.std()
    
    #print "len vector: ", len(vector)
    #print "z_score: ", z    
    
    if z > 1.40 and vector.sum() > 200:
        isBig = True  
    else:
        isBig = False
            
    if isBig == False:
        cluster_max_docs = -1
        
    return isBig, cluster_max_docs

#---------------------------------------------------------------------------#
#
def split_cluster(matrix_docs_features, kmlabels, k=3):
    
    # matrix_docs_features is a DataFrame object
    ncluster = 0
    dict_split_cluster = {}    
    
    labels = kmlabels
    isBig, cluster_max_docs = detect_big_cluster(labels)
    
    sub_matrix = matrix_docs_features.copy() # default value
    
    while isBig:
        # Docs belonging to the big cluster
        sub_matrix = sub_matrix.loc[labels == cluster_max_docs]

        B = sub_matrix.values     # B matrix for document in the largest cluster
        X = get_tfidf_matrix(B)   # New tf-idf coefficients
        
        # k-mean model for this sub_matrix
        km = get_kmean_model(X, k)
        km.fit_transform(X)
        
        # The complete vocabulary
        feature_names = matrix_docs_features.columns.tolist()
        
        topn_terms, num_docs_cluster = get_top_n_terms_per_cluster(km,
                                                           feature_names,
                                                           k,
                                                           top=15)

        isBig, cluster_max_docs = detect_big_cluster(km.labels_)
        
        idx_docs = defaultdict(list)
        for nc in range(k):
            if isBig:
                if nc != cluster_max_docs:
#                   idx_docs[nc].append(sub_matrix.index[km.labels_ == nc]) 
                    idx_docs[nc].extend(sub_matrix.index[km.labels_ == nc]) 
            else:
#               idx_docs[nc].append(sub_matrix.index[km.labels_ == nc])
                idx_docs[nc].extend(sub_matrix.index[km.labels_ == nc])

        for nc, ele in enumerate(topn_terms):
            
            if isBig:            
                if nc != cluster_max_docs:
                    dict_split_cluster[ncluster] = (ele, idx_docs[nc])
                    ncluster += 1
            else:
                dict_split_cluster[ncluster] = (ele, idx_docs[nc])
                ncluster += 1

        labels = km.labels_

        #print "labels: ", labels
    else:
        return dict_split_cluster
#---------------------------------------------------------------------------#
#
def label_split_clusters(split_clusters):
    
    categories = [u'vivienda', u'justicia', u'educación', u'empleo', 
                  u'medio ambiente', u'salud', u'jóvenes', u'ideología',
                  u'economía', u'internacional', u'cultura', 
                  u'inseguridad ciudadana', u'social', 
                  u'servicios públicos e infraestructuras', u'corrupción',
                  u'fuerzas armadas', u'tecnologia e investigación', 
                  u'terrorismo', u'otros']

    dict_target = {}

    i = 0
    for t in categories:
        dict_target[t] = i
        i = i + 1
        
    target_train = []
    dict_cis = get_dict_CIS()
    
    # Build documents formed by keywords and "bag-of-the-keywords"
    all_keywords = Counter()
    topics_train = []
    target_train = []
    for key in dict_cis:
        doc_kw = []
        target_train.append(key)
        for keyword in dict_cis[key]:
            doc_kw.append(keyword)
            all_keywords[keyword] +=1
        topics_train.append(doc_kw)    
    
    vocabulary = set(all_keywords.keys())
    
    X_train_counts = []

    for doc in topics_train:
        doc_keywords = []
        for keyword in doc:
            doc_keywords.append(keyword)
        X_train_counts.append(doc_keywords)
    
    l = []
    for doc_kw in X_train_counts:
        count_kw = Counter()
        for k in doc_kw:
            if k in vocabulary:
                count_kw[k] +=1
        l.append(count_kw)

    l = pd.DataFrame(l, index=range(18), 
                     columns=vocabulary).fillna(0) # nan --> 0
    X_train_counts = l.values
    
    tfidf_transformer = TfidfTransformer()
    X_train_tfidf = tfidf_transformer.fit_transform(X_train_counts)
    X_train_tfidf.shape
    
    from sklearn.linear_model import SGDClassifier
    clf = SGDClassifier(loss='hinge', penalty='l2', alpha=1e-3, n_iter=5, 
                        random_state=42).fit(X_train_tfidf, target_train)

    docs_new = []
    idx_docs = []
    docs_cls = []
    for ncl in split_clusters.keys():
        lkw = split_clusters[ncl][0]  # list of keywords
        lid = split_clusters[ncl][1]  # Index docs 
        docs_new.append(lkw)
        docs_cls.append(lid)
        idx_docs.append(ncl)
           
    l = []
    for doc_kw in docs_new:
        count_kw = Counter()

        for k in doc_kw:
            if k in vocabulary:
                count_kw[k] +=1
        l.append(count_kw)

    l = pd.DataFrame(l, index=range(len(docs_new)), 
                     columns=vocabulary).fillna(0) # nan --> 0
    X_new_counts = l.values        
        
    X_new_tfidf = tfidf_transformer.transform(X_new_counts)
        
    predicted = clf.predict(X_new_tfidf)
    
    #for doc, idx, category in zip(docs_new, docs_cls, predicted):
    #    print "doc: ", doc
    #    print "large category: ", target_train[dict_target[category]]
    #    print "numeric category: ", category
    #    print ' '
    
        
    # return label + keywords + documents
    sortida = []
    for doc, idx, category in zip(docs_new, docs_cls, predicted):
        sortida.append((doc, idx, target_train[dict_target[category]]))
                   
    return sortida

#---------------------------------------------------------------------------#
#
def label_rest_clusters(top_terms, clusters_CIS, km):
    
    categories = [u'vivienda', u'justicia', u'educación', u'empleo', 
                  u'medio ambiente', u'salud', u'jóvenes', u'ideología',
                  u'economía', u'internacional', u'cultura', 
                  u'inseguridad ciudadana', u'social', 
                  u'servicios públicos e infraestructuras', u'corrupción',
                  u'fuerzas armadas', u'tecnologia e investigación', 
                  u'terrorismo', u'otros']

    dict_target = {}

    i = 0
    for t in categories:
        dict_target[t] = i
        i = i + 1
        
    target_train = []
    dict_cis = get_dict_CIS()
    
    # Build documents formed by keywords and "bag-of-the-keywords"
    all_keywords = Counter()
    topics_train = []
    target_train = []
    for key in dict_cis:
        doc_kw = []
        target_train.append(key)
        for keyword in dict_cis[key]:
            doc_kw.append(keyword)
            all_keywords[keyword] +=1
        topics_train.append(doc_kw)    
    
    vocabulary = set(all_keywords.keys())
    
    X_train_counts = []

    for doc in topics_train:
        doc_keywords = []
        for keyword in doc:
            doc_keywords.append(keyword)
        X_train_counts.append(doc_keywords)
    
    l = []
    for doc_kw in X_train_counts:
        count_kw = Counter()
        for k in doc_kw:
            if k in vocabulary:
                count_kw[k] +=1
        l.append(count_kw)

    l = pd.DataFrame(l, index=range(18), 
                     columns=vocabulary).fillna(0) # nan --> 0
    X_train_counts = l.values
    
    tfidf_transformer = TfidfTransformer()
    X_train_tfidf = tfidf_transformer.fit_transform(X_train_counts)
    X_train_tfidf.shape
    
    from sklearn.linear_model import SGDClassifier
    clf = SGDClassifier(loss='hinge', penalty='l2', alpha=1e-3, n_iter=5, 
                        random_state=42).fit(X_train_tfidf, target_train)
    
    filter_clusters = clusters_CIS.tolist()
    docs_new = []
    idx_docs = []
    for idx, doc in enumerate(top_terms):
        if idx not in filter_clusters:
            docs_new.append(doc)
            idx_docs.append(idx)
        
    l = []
    for doc_kw in docs_new:
        count_kw = Counter()

        for k in doc_kw:
            if k in vocabulary:
                count_kw[k] +=1
        l.append(count_kw)

    l = pd.DataFrame(l, index=range(len(docs_new)), 
                     columns=vocabulary).fillna(0) # nan --> 0
    X_new_counts = l.values        
        
    X_new_tfidf = tfidf_transformer.transform(X_new_counts)
        
    predicted = clf.predict(X_new_tfidf)
    
    ii=0
    sortida = []
    for doc, category in zip(docs_new, predicted):
        #print '%r => [%d] %s' % (doc, idx_docs[ii],
        #                         target_train[dict_target[category]])
        sortida.append((doc, idx_docs[ii], 
                        target_train[dict_target[category]]))
        #print ' '
        ii +=1
                   
    return sortida
#
#
def detect_bc_in_pure_cluster(pure_clusters, labels):
    
    isBig, big_cluster = detect_big_cluster(labels)
    
    return (big_cluster in pure_clusters)