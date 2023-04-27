# Next.js resolution order

Next.js resolution order on the server-side :

1. app.getInitialProps
2. page.getInitialProps
3. document.getInitialProps
4. app.render
5. page.render
6. document.render

and on the client-side:

1. app.getInitialProps
2. page.getInitialProps
3. app.render
4. page.render
