const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

// Constants
const PATH_PUBLIC = path.resolve(__dirname, 'public');
const PATH_SRC_CSS = path.resolve(__dirname, 'src/css/');
const PATH_SRC_HTML_HOME  = 
  path.resolve(__dirname, 'src/html/home/index.html');
const PATH_SRC_COMPONENTS = 
  path.resolve(__dirname, 'src/components');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: PATH_PUBLIC,
  },
  devServer: {
    contentBase: PATH_PUBLIC,
    disableHostCheck: true,
    hot: true,
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({template: PATH_SRC_HTML_HOME}),
    new CleanWebpackPlugin([PATH_PUBLIC]),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    alias: {
      css: PATH_SRC_CSS,
      components: PATH_SRC_COMPONENTS,
    },
    extensions: ['.js', '.css']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.(woff|woff2)$/,
        exclude: /node_modules/,
        use: 'file-loader'
      }
    ]
  }
};