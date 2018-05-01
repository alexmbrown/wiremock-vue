'use strict'

module.exports = {
  chainWebpack: config => {
    config.entry('app')
      .clear()
      .add('./src/client/main.js')
      .end()
  },
  devServer: {
    proxy: 'http://localhost:8080'
  }
}