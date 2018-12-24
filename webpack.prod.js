const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

// Constants

module.exports = merge(common, {
  mode: "production",
});