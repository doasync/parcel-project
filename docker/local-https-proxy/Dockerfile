FROM nginx:1.15-alpine

EXPOSE 80
EXPOSE 443

RUN mkdir -p /var/www/html/dist \
 && rm -r /etc/nginx/conf.d

WORKDIR /var/www/html/dist

COPY nginx /etc/nginx/

CMD ["nginx", "-g", "daemon off;"]
