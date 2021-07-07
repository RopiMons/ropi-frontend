# The documentation for this dockerfile can be found on
# https://webdevpro.net/utiliser-symfony-dans-docker/
#
# This Dockerfile is used by the companion file docker-compose.yml
# which is processed by callin  `docker-compose up -d`

FROM node:lts-alpine

# Apk install
RUN apk --no-cache update && apk --no-cache --virtual add bash yarn

WORKDIR /var/www/html

#Set up script file
COPY scripts/entrypoint.sh /scripts/entrypoint.sh
RUN ["chmod", "+x", "/scripts/entrypoint.sh"]

ENTRYPOINT ["/scripts/entrypoint.sh"]