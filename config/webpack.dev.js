
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var BitBarWebpackProgressPlugin = require("bitbar-webpack-progress-plugin");

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        publicPath :'http://localhost:8080',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new ExtractTextPlugin('[name].css'),
        new BitBarWebpackProgressPlugin()
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }

})