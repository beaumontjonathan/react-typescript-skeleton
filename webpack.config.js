const HtmlWebPackPlugin = require('html-webpack-plugin');
const rules = require('./webpack/webpack.rules');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules,
  },
  plugins: [
    htmlPlugin,
  ],
};
