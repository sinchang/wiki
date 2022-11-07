# Fix: Module not found: Error: Can't resolve 'child_process'

Add this to `.storybook/main.js`

```
module.exports = {
  webpackFinal: async (config, configType) => {
    config.node = {child_process: 'empty'};
    return config;
  },
};
```
