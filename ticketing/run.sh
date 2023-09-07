#!/bin/sh

# /etc/hosts
#   127.0.0.1       udemy.microservice-course.ticketing

# Fix for Cannot connect to the Docker daemon at unix:///var/run/docker.sock
# sudo ln -s "$HOME/.docker/run/docker.sock" /var/run/docker.sock
skaffold dev
# navigate to http://udemy.microservice-course.ticketing
