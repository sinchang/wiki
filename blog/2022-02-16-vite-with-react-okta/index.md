---
title: Vite with React Okta App
description: Some tweaks you should know if using Vite with React Okta App.
date: 2022-02-16
tags: [Okta, React, Vite]
---

If you want to use Vite to build the React Okta App, you maybe face some incompatible issues. I will share some of my research in this post.

![Vite with React Okta App](https://user-images.githubusercontent.com/3297859/154039772-04997c78-c4c6-4e5a-9590-99e23a065c1d.png)

### Issue 1: Uncaught TypeError: Class extends value undefined is not a constructor or null

As the Okta's staff said, It's a known issue with the ESM bundle of okta-auth-js.

So, we should add the below into the `vite.config.ts`

```js
resolve: {
  alias: [
    {
      find: '@okta/okta-auth-js',
      replacement: require.resolve(
        '@okta/okta-auth-js/dist/okta-auth-js.umd.js'
      ),
    },
  ],
},
```

### Issue2: Security.tsx:99 Uncaught ReferenceError: process is not defined

Solution: Add the below code to the `vite.config.ts`

```js
define: {
  'process.env': process.env
}
```

You can find the final version code on [okta-demo](https://github.com/sinchang-codespaces/okta-demo).

## References

- [Server version is used in browser when bundled with Vite](https://github.com/okta/okta-auth-js/issues/641)
- [Uncaught ReferenceError: process is not defined](https://github.com/vitejs/vite/issues/1973)
