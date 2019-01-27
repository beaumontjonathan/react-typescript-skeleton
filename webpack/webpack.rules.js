const rules = [
  {
    test: /\.tsx$/,
    exclude: /node_modules/,
    use: {
      loader: 'awesome-typescript-loader',
    },
  },
  {
    enforce: 'pre',
    test: /\.js$/,
    loader: 'source-map-loader',
  }
];

module.exports = rules;
