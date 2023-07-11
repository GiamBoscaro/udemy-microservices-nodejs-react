#!/bin/sh

# DOCS: https://kubernetes.github.io/ingress-nginx/deploy/#quick-start

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.1/deploy/static/provider/cloud/deploy.yaml
