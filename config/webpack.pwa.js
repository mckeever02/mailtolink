/* eslint-disable import/no-extraneous-dependencies */
const Merge = require('webpack-merge');
const ProdConfig = require('./webpack.prod.js');
const path = require('path');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = Merge(ProdConfig, {
  plugins: [
    new WebpackPwaManifest({
      name: 'mailtolink.me',
      short_name: 'mailtolink.me',
      description: 'A quick and easy way to generate markup for mailto links without having to worry about the annoying formatting.',
      orientation: 'portrait',
      display: 'standalone',
      start_url: '/',
      theme_color: '#9eebcf',
      background_color: '#111111',
      icons: [
        {
          src: path.resolve('icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),
  ],
});
