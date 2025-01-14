const path = require('path');

module.exports = {
  resolve: {
    alias: {
      'webpack-hot-client-alt/client': path.resolve(__dirname, '../../client')
    }
  },
  context: __dirname,
  devtool: 'source-map',
  entry: [path.resolve(__dirname, './app.js')],
  mode: 'development',
  output: {
    filename: 'output.js',
    path: path.resolve(__dirname, 'output')
  }
};
