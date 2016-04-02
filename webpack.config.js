/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict'
var webpack = require('webpack')

module.exports = {
  output: {
    path: '.',
    filename: 'bundle.js'
  },

  cache: true,
  debug: true,
  devtool: false,
  entry: [
    './app.js'
  ],

  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'styles': __dirname + './react-material-alert/css',
      'lib': __dirname + './react-material-alert/lib'
    }
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    }]
  },

  plugins: [
    new webpack.NoErrorsPlugin()
  ]
}
