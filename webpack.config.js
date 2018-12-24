const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

// Constants
const PATH_SRC_CSS = path.resolve(__dirname, 'src/css/');
const PATH_SRC_HTML_HOME  = 
  path.resolve(__dirname, 'src/html/home/index.html');
const PATH_SRC_COMPONENTS = 
  path.resolve(__dirname, 'src/components');
const OUTPUT_FOLDER_NAME = 'public';
const OUTPUT_PATH_ROOT = path.resolve(__dirname, OUTPUT_FOLDER_NAME);

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
  },
  devServer: {
    contentBase: OUTPUT_PATH_ROOT,
    disableHostCheck: true,
  },
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: OUTPUT_PATH_ROOT,
  },
  plugins: [
    new HtmlWebpackPlugin({template: PATH_SRC_HTML_HOME}),
    new CleanWebpackPlugin([OUTPUT_PATH_ROOT]),
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
        use: ['babel-loader', 'react-hot-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.(woff|woff2)$/,
        use: 'file-loader'
      }
    ]
  }
};