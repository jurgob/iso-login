'use strict';

var webpack = require('webpack');

module.exports = {
  entry: "./src/client.js",
  output: {
    path: __dirname,
    filename: "./public/js/bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader?optional[]=es7.decorators&stage=0'
    }],
  }
};
