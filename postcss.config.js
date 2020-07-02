const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    require('autoprefixer'),
    purgecss({
      content: ['./src/_includes/layouts/base.njk'],
      whitelist: ['dark','active']
    }),
    require('cssnano')
  ]
}
// require('tailwindcss'),
//     require('autoprefixer')