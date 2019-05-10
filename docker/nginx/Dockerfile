FROM nginx:1.15-alpine

EXPOSE 80

RUN mkdir -p /var/www/html/dist \
 && echo "ok" > /var/www/html/dist/index.html \
 && rm -r /etc/nginx/conf.d

WORKDIR /var/www/html/dist

COPY \
 docker/nginx/nginx.conf \
 docker/nginx/default.conf \
 docker/nginx/gzip.conf \
 docker/nginx/cache-max.conf \
 docker/nginx/enable-cors.conf \
 /etc/nginx/

COPY dist /var/www/html/dist

CMD ["nginx", "-g", "daemon off;"]
