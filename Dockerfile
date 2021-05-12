FROM openresty/openresty:alpine-fat

RUN mkdir /var/log/nginx
RUN mkdir /usr/local/openresty/nginx/certs

RUN apk add --no-cache openssl-dev
RUN apk add --no-cache git
RUN apk add --no-cache gcc

RUN luarocks install lua-resty-openidc

ENTRYPOINT [ "/usr/local/openresty/nginx/sbin/nginx", "-g", "daemon off;" ]