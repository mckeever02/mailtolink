/* eslint-disable import/no-extraneous-dependencies */
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const path = require('path');
const glob = require('glob')
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UnCSSPlugin = require('uncss-webpack-plugin'); 
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const PATHS = {
  src: path.join(__dirname, '_site')
}

module.exports = Merge(CommonConfig, {
  output: {
    filename: '[name]-[hash].bundle.js',
    path: path.resolve('assets'),
    publicPath: '/assets/',
  },
  plugins: [
    new CleanWebpackPlugin(['assets'], { root: path.resolve(__dirname, '..'), verbose: true }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true,
      },
      compress: {
        screw_ie8: true,
      },
      comments: false,
    }),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
    // new PurgecssPlugin({
    //   paths: glob.sync([
    //     '/*.html'
    //   ]),
    //   paths: glob.sync(`${PATHS.src}/*`, { nodir: true })
    // }),
  ],
});
