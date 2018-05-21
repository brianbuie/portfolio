const path = require('path');

exports.modifyWebpackConfig = function({ config, env }) {
  config.merge({
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, './src/assets'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@parts': path.resolve(__dirname, './src/parts')
      }
    }
  });
  return config;
}