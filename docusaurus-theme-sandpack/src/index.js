const path = require('path')

function theme() {
  return {
    name: 'docusaurus-theme-sandpack',

    getThemePath() {
      return path.resolve(__dirname, './theme')
    },
  }
}

module.exports = theme