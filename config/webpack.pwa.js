/* eslint-disable import/no-extraneous-dependencies */
const Merge = require('webpack-merge');
const ProdConfig = require('./webpack.prod.js');
const path = require('path');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = Merge(ProdConfig, {
  plugins: [
    new WebpackPwaManifest({
      name: 'Super-website',
      short_name: 'Super PWA',
      description: 'A super website made with love',
      orientation: 'portrait',
      display: 'standalone',
      start_url: '/',
      theme_color: '#c0ffee',
      background_color: '#ffffff',
      icons: [
        {
          src: path.resolve('icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),
  ],
});
