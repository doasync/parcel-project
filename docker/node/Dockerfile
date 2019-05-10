FROM node:10.10-alpine

RUN mkdir -p /var/www/html

WORKDIR /var/www/html

ENV HOME /var/www/html/.temp

# Install glibc for flow-bin
RUN apk --no-cache add ca-certificates wget \
 && wget -q -O /etc/apk/keys/sgerrand.rsa.pub https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub \
 && wget -q https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.28-r0/glibc-2.28-r0.apk \
 && apk --no-cache add glibc-2.28-r0.apk
