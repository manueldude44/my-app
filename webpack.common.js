const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

// Constants
const PATH_PUBLIC = path.resolve(__dirname, 'public');
const PATH_SRC_CSS = path.resolve(__dirname, 'src/css/');
const PATH_SRC_HTML_HOME  = 
  path.resolve(__dirname, 'src/html/home/index.html');
  const PATH_SRC_HTML_ERROR  = 
  path.resolve(__dirname, 'src/html/home/error.html');
const PATH_SRC_COMPONENTS = 
  path.resolve(__dirname, 'src/components');

module.exports = {
  entry: {
    home: './src/index.js',
    error: './src/error.js',
  },
  optimization: {
    usedExports: true,
  },
  output: {
    filename: '[name].bundle.js',
    path: PATH_PUBLIC,
  },
  plugins: [
    new HtmlWebpackPlugin({template: PATH_SRC_HTML_HOME, filename: 'index.html', excludeChunks: ['error']}),
    new HtmlWebpackPlugin({template: PATH_SRC_HTML_ERROR, filename: 'error.html', excludeChunks: ['home']}),
    new CleanWebpackPlugin([PATH_PUBLIC]),
  ],
  resolve: {
    modules: ['src', 'node_modules'],
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