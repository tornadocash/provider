const { resolve } = require('path')

module.exports = async function module(moduleOptions) {
  const defaultOptions = {
    id: 1,
    rpcUrl: '',
    rpcCallRetryAttempt: 15,
    blockGasLimit: 7300000,
  }

  const options = Object.assign({}, defaultOptions, this.options.provider, moduleOptions)

  // Register plugin
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'provider.js',
    options,
  })
}

module.exports.meta = require('../package.json')
