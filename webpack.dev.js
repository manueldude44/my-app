const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

// Constants
const PATH_PUBLIC = path.resolve(__dirname, 'public');
const PATH_SRC_CSS = path.resolve(__dirname, 'src/css/');
const PATH_SRC_HTML_HOME  = 
  path.resolve(__dirname, 'src/html/home/index.html');
const PATH_SRC_COMPONENTS = 
  path.resolve(__dirname, 'src/components');

module.exports = merge(common, {
  mode: "development",
  devServer: {
    noInfo: true,
    contentBase: PATH_PUBLIC,
    disableHostCheck: true,
    hot: true,
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});