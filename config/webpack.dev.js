/* eslint-disable import/no-extraneous-dependencies */
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const webpack = require('webpack');

module.exports = Merge(CommonConfig, {
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('assets'),
    publicPath: '/assets/',
  },
  devtool: 'inline-source-map',
  plugins: [
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 4000,
        proxy: 'http://localhost:8080',
        files: ['_site', '_src'],
      },
      {
        reload: false,
      },
    ),
    new webpack.HotModuleReplacementPlugin(),
  ],
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       enforce: 'pre',
  //       exclude: /node_modules/,
  //       loader: 'eslint-loader',
  //     },
  //   ],
  // },
  devServer: {
    contentBase: [
      path.resolve('_site'),
    ],
    hot: true,
  },
});
