# Fix the Docusaurus trailing slash issue in self-host

Create a file called static/js/fix-location.js with:

```
if (window && window.location && window.location.pathname.endsWith('/') && window.location.pathname !== '/') {
  window.history.replaceState('', '', window.location.pathname.substr(0, window.location.pathname.length - 1))
}
```
Load this file as static JS file in docusaurus.config.js:
```
  scripts: [
    {
      src: '/js/fix-location.js',
      async: false,
      defer: false,
    }
   ],
```

ref: https://github.com/facebook/docusaurus/issues/2394#issuecomment-630638096

Another solution to fix this by using busybox

```shell
FROM node:16 AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Deployment step

FROM busybox:1.35 as deploy

RUN adduser -D static
USER static
WORKDIR /home/static

COPY --from=build /usr/src/app/build/ ./

EXPOSE 3000

CMD ["busybox", "httpd", "-f", "-v", "-p", "3000"]
```
