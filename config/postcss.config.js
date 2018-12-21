const uncssConfig = {
  html: [
    '_site/index.html',
    // Your entire sitemap added manually
    // or some other way if you’re clever (wget is handy for this).
  ],
  ignore: [/\.dark/, /\.active/]
};

// eslint-disable-next-line no-unused-vars
module.exports = ({ file, options, env }) => ({
  parser: 'postcss-scss',
  plugins: {
    'postcss-uncss': uncssConfig,
    'postcss-import': {},
    autoprefixer: {},
    cssnano: env === 'production' ? {} : false,
  },
});