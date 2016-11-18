var path = require('path');
var webpack = require('webpack');
var ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
var helpers = require('./helpers');

var ENV = process.env.ENV = process.env.NODE_ENV = 'test';

module.exports = {

    // Source map for Karma from the help of karma-sourcemap-loader & karma-webpack
    devtool: 'inline-source-map',

    resolve: {
      extensions: ['.ts', '.js'],
      modules: [
        path.resolve(__dirname, 'src'),
        'node_modules'
      ]
    },

    module: {
      // See webpack.common.js for more explanation about rules
      rules: [
        // Extracts SourceMaps for source files that as added as sourceMappingURL comment
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader',
          exclude: [
            // These packages have problems with their sourcemaps
            helpers.root('node_modules/rxjs'),
            helpers.root('node_modules/@angular'),
            helpers.root('node_modules/@ng-bootstrap'),
            helpers.root('node_modules/ng2-translate')
          ]
        },
        {
          test: /\.ts$/,
          loaders: ['awesome-typescript-loader', 'angular2-template-loader']
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.scss$/,
          loaders: ['raw-loader', 'sass-loader']
        },
        {
          test: /\.html$/,
          loader: 'raw-loader'
        }
      ]
    },

    // See webpack.common.js for more explanation about plugins
    plugins: [
      new ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        helpers.root('src')
      ),
      new webpack.DefinePlugin({
        'process.env': {
          'ENV': JSON.stringify(ENV)
        }
      })
    ]

};
