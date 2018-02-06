# use a node base image
FROM node:alpine

# set maintainer
LABEL maintainer "rajesh@unigps.in"

# set a health check
HEALTHCHECK --interval=5s \
            --timeout=5s \
CMD curl -f http://127.0.0.1:8000 || exit 1

WORKDIR /app
COPY main.js package.json /app/

# tell docker what port to expose
#EXPOSE 8000
