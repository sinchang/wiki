---
title: Issues on Storybook 6.4 upgrading
description: Some issues I met when I upgraded the Storybook to the v6.4.
tags: [Storybook, React]
---

I recently upgraded the Storybook from v6.1.11 to v6.4.19 in my company's project, but the process is not smooth. I met the two issues on my upgrading.

![Issues on Storybook 6.4 upgrading](https://user-images.githubusercontent.com/3297859/154826042-89381812-f837-479b-9772-a1685f01b688.png)

### Issue1: Missing class properties transform

Solution: add the below code to the ./storybook/main.js.

```js
module.exports = {
  babel: async (options) => ({
    ...options,
    plugins: [['@babel/plugin-proposal-class-properties', { loose: true }]],
  }),
}
```

### Issue2: iframe.html no longer built with --preview-url

My storybook website runs in a subpath domain so should add `--preview-url` on the build command, but sadly find iframe.html no longer generated after upgrading.

The solved way is adding the option `--force-build-preview` to the build command.

## References

- [CLI: Add option to force-build iframe despite custom preview URL](https://github.com/storybookjs/storybook/pull/15030)
- [Storybook 6.2.0-beta.13 not transforming class properties](https://github.com/storybookjs/storybook/issues/14197)
