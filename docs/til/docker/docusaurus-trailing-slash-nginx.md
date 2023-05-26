# Fix the Docusaurus trailing slash issue in Nginx

Add the following config in the `nginx/nginx.conf`

```
server {
  listen 80;
  server_name localhost;
  rewrite ^/(.*)/$ /$1 permanent;

  location / {
   root /usr/share/nginx/html;
   try_files $uri /index.html;
 }
}
```

The Dockerfile shoule like this:

```
FROM nginx:alpine

COPY ./build /usr/share/nginx/html

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
```
