var path = require('path')
var PostCompilePlugin = require('../../../lib/index')

module.exports = {
  context: __dirname,
  entry: {
    app: path.resolve(__dirname, './index')
  },
  output: {
    path: path.resolve(__dirname, './'),
    library: 'normal',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, './')]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new PostCompilePlugin({
      dependenciesKey: 'myCompileDependencies',
      compileDependencies: ['a', 'b']
    })
  ]
}
