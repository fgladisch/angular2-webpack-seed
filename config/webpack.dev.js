const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

const ENV = process.env.NODE_ENV = process.env.ENV = 'development'

module.exports = webpackMerge(commonConfig(), {

  // Sourcemap without column-mappings
  devtool: 'cheap-module-source-map',

  output: {
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    })
  ]

})
