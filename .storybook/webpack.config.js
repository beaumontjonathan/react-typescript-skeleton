const path = require('path');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');
module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('awesome-typescript-loader')
  });
  config.resolve.alias = {
    components: path.resolve(__dirname, '../src/components'),
    theme: path.resolve(__dirname, '../src/theme'),
  };
  config.plugins.push(new TSDocgenPlugin()); // optional
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
