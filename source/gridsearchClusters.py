# -*- coding: utf-8 -*-
"""
Created on Thu Apr 30 12:31:59 2015

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
# Parameters GridSearch best model
#------------------------------------------------------
# limits = list of term frequency thresholds (reduce dimensionality)
# n_clusters = list of 'k' of k-means
# ntop = 'n' top terms from each cluster
#------------------------------------------------------
t0 = time.time()

limits = [25]
n_clusters = [45]
ntop = 20  #  n top terms for each cluster

print "limits = ", limits
print "n_clusters = ", n_clusters
print "ntop = ", ntop

# Flag to save objects as pickle files
persistence = 1  # 1: activate 0: deactivate

# Flag to work out only Silhouette values
only_silhouette = 0

# Flag to activa/deactiva log file (at ./logs)
log = 0
log_filename = 'logfile.txt' # logfile's name

# Prefix for file names
t = time.localtime()
data_file = (str(t.tm_year) + str(t.tm_yday) + '_' +
             str(t.tm_hour) + str(t.tm_min) + str(t.tm_sec))

# Open log file
if log > 0:
    logfile = open('./logs/' + data_file + '_' + log_filename, 'w')
       
# From mongodb we build a list of lists of keywords form docs
docs_keywords, vocabulary, dframe = get_keywords_docs()

# Auxiliar DataFrame for building metrics 
df_aux = pd.DataFrame(dframe,columns=['date', 'num_exp','num_lines'])

# Build vocabulary based on limits
c_vocabulary = copy.copy(vocabulary)  # shallow copy

d_limit, d_lists_of_vocabulary = get_dict_limits_and_vocabulary(limits,
                                                         c_vocabulary)                                                        
top_terms_limit_cluster = {}
all_CIS_clusters = {}
all_silhouettes_avg = {}
all_silhouettes_samples = {}
all_split_bc = {}
all_labeled_split_clusters = {}
all_labeled_rest_clusters = {}

for limit in d_lists_of_vocabulary:
       
    c_vocabulary = d_lists_of_vocabulary[limit]
    # Create term-frequency matrix B and list/index of feature
    matrix_docs_features = build_tf_matrix(docs_keywords, c_vocabulary)

    # DataFrame --> numpy ndarray
    B = matrix_docs_features.values

    # features (in column order)
    feature_names = matrix_docs_features.columns
       
    if persistence == 1:
        name = data_file + '_matrix_docs_features_tf_' + str(limit)
        save_object(matrix_docs_features, name)
        name = data_file + '_feature_names_tf_' + str(limit)
        save_object(feature_names.tolist(), name)

    # Get tfidf coefficients matrix
    X = get_tfidf_matrix(B)
    
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
    
    # For each k-clusters
    for nc in n_clusters:
        # For each vocabulary we work out its k-means model
        km = get_kmean_model(X, nc)
        # Save the k-mean model
        silhouette_avg[nc], samples_silhouette_values[nc] = \
                                       get_silhouette_scores(X, km, nc)
        
        if persistence == 1:
            name = (data_file + '_kmean_' + 'tf_' + str(limit) + 
                    '_k_' + str(nc))
            save_object(km, name)
        
        if only_silhouette == 0:        
            # Get top N terms per cluster in a list
            (top_terms_per_cluster[nc], 
             num_docs_per_cluster[nc])  = get_top_n_terms_per_cluster(km, 
                                                            feature_names,
                                                            nc, ntop)
            # Mapping CIS' labels to k-clusters (dict of lists)
            labels_CIS, clusters_CIS[nc] = mapping_CIS_to_clusters(km,
                                                             feature_names,
                                                        matrix_docs_features)
                                                                     
            tupla[nc] = zip(labels_CIS, clusters_CIS[nc],
                       (num_docs_per_cluster[nc][x]
                                         for x in clusters_CIS[nc]),
                       (top_terms_per_cluster[nc][x] 
                                         for x in clusters_CIS[nc]))
                                             
            labeled_rest_clusters[nc] = \
                       label_rest_clusters(top_terms_per_cluster[nc],
                                           clusters_CIS[nc],
                                           km)            
            
            split_bc[nc] = split_cluster(matrix_docs_features, 
                                         km.labels_, k=4)
            
            labeled_split_clusters[nc] = label_split_clusters(split_bc[nc])
            
            rc = detect_bc_in_pure_cluster(clusters_CIS[nc], km.labels_)
            assert rc==False ,"Iteration not valid! Try again!"
            
    # dicts of dicts of lists    
    if only_silhouette == 0:        
        top_terms_limit_cluster[limit] = top_terms_per_cluster
        all_CIS_clusters[limit] = tupla
        all_split_bc[limit] = split_bc
        all_labeled_split_clusters[limit] = labeled_split_clusters
        all_labeled_rest_clusters[limit] = labeled_rest_clusters
        
    all_silhouettes_avg[limit] = silhouette_avg
    all_silhouettes_samples[limit] = samples_silhouette_values
    
if only_silhouette == 0:    
    for limit in limits:
        for nc in n_clusters:
            # labels to clusters            
            tb_labels_to_clusters = pd.DataFrame(all_CIS_clusters[limit][nc], 
                                  columns=["CIS_topic", 
                                           "Cluster_number",
                                           "Num_docs", 
                                           "Cluster's top terms"])
                                           
            name = (data_file + '_labels_to_clusters_tf_' + 
                str(limit) + '_k_' + str(nc))
            tb_labels_to_clusters.to_csv('./files/'+ name  + '.csv', 
                                         encoding='utf-8', sep=";")
            tb_labels_to_clusters.to_pickle('./files/'+ name  + '.pkl')
                                  
            # labels to splitted clusters
            tb_labels_to_split_clusters = pd.DataFrame(
                                    all_labeled_split_clusters[limit][nc],
                           columns = ["Top_terms", "Idx_docs", "CIS_topic"])
                           
            name = (data_file + '_labels_to_split_clusters_tf_' + 
                str(limit) + '_k_' + str(nc))
            tb_labels_to_split_clusters.to_csv('./files/'+ name + '.csv',
                                               encoding='utf-8', sep=";")
            tb_labels_to_split_clusters.to_pickle('./files/'+ name + '.pkl')
            
            # labels to rest of clusters
            tb_labels_to_rest_clusters = pd.DataFrame(
                                        all_labeled_rest_clusters[limit][nc],
                           columns = ["Top_terms", "Cluster", "CIS_topic"])
                           
            name = (data_file + '_labels_to_rest_clusters_tf_' + 
                str(limit) + '_k_' + str(nc))
            tb_labels_to_rest_clusters.to_csv('./files/'+ name + '.csv',
                                               encoding='utf-8', sep=";") 
            tb_labels_to_rest_clusters.to_pickle('./files/'+ name + '.pkl')
        
            tb_top_term_per_cluster = pd.DataFrame(
                                  top_terms_limit_cluster[limit][nc])
                                  
            # We want every column be a cluster
            tb_top_term_per_cluster = tb_top_term_per_cluster.T
        
            name = (data_file + '_top_term_per_cluster_tf_' + 
                str(limit) + '_k_' + str(nc) + '.csv')
            tb_top_term_per_cluster.to_csv('./files/'+ name, encoding='utf-8',
                                    sep=";")    
if persistence == 1:
    name = data_file + '_top_terms_per_cluster'
    save_object(top_terms_limit_cluster, name)
    name = data_file + '_labels_clusters'
    save_object(all_CIS_clusters, name)


# Close log file
if log > 0:
    logfile.close()

print "Done in %fs" % (time.time() - t0)