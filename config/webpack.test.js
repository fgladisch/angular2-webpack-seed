var webpack = require('webpack');
var helpers = require('./helpers');

var ENV = process.env.ENV = process.env.NODE_ENV = 'test';

module.exports = {

  // Source map for Karma from the help of karma-sourcemap-loader & karma-webpack
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['', '.ts', '.js'],
    root: helpers.root('src')
  },

  module: {

    preLoaders: [

      // Extracts SourceMaps for source files that as added as sourceMappingURL comment
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          // These packages have problems with their sourcemaps
          helpers.root('node_modules/rxjs'),
          helpers.root('node_modules/@angular')
        ]
      }

    ],

    // See webpack.common.js for more explanation about loaders
    loaders: [{
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        query: {
          compilerOptions: {

            // Remove TypeScript helpers to be injected below by DefinePlugin
            removeComments: true

          }
        }
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.scss$/,
        loaders: ['raw-loader', 'sass-loader']
      }, {
        test: /\.html$/,
        loader: 'raw-loader'
      }

    ],

    postLoaders: [

      // Instruments JS files with Istanbul for subsequent code coverage reporting
      {
        test: /\.(js|ts)$/,
        loader: 'istanbul-instrumenter-loader',
        include: helpers.root('src'),
        exclude: [
          /\.spec\.ts$/,
          /node_modules/
        ]
      }

    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    })
  ]

};
