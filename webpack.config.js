var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/main.jsx'
    ]
  },
  output: {
    filename: '[name]_bundle.js',
    path: path.join(__dirname, 'public'),
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loader: 'react-hot!babel'
      },
      {
        test: /\.ico$/,
        include: path.join(__dirname, 'img'),
        loader: "file?name=favicon.[ext]"
      }
    ]
  }
};
