var webpack = require('webpack');
var ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var helpers = require('./helpers');

module.exports = {

  resolve: {
    // Array of extensions that will be used to resolve modules
    extensions: ['.js', '.ts']
  },

  // Entry points the bundles
  entry: {
    'polyfills': helpers.root('src', 'polyfills.ts'),
    'vendor': helpers.root('src', 'vendor.ts'),
    'app': [
      helpers.root('src', 'main.ts'),
      helpers.root('src', 'assets', 'styles', 'main.scss')
    ]
  },

  module: {
    rules: [
      // Compiles all .ts files
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
        exclude: /\.spec\.ts$/
      },
      // Injects all html templates into their components and loads referenced assets
      {
        test: /\.html$/,
        loader: 'html-loader',
        exclude: helpers.root('src/index.html')
      },
      // Copies all images and fonts into dist/assets
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file-loader?name=assets/[name].[ext]'
      },
      // Puts all styles from assets/styles/main.scss in a separate file
      {
        test: /\.scss$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      // Injects all angular styles into their components
      {
        test: /\.scss$/,
        include: helpers.root('src', 'app'),
        loaders: ['raw-loader', 'sass-loader']
      },
      // Loads all "required" json files into their components
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },

  plugins: [
    // File name for the extracted styles
    new ExtractTextPlugin('[name].css'),
    // Identifies common modules and puts them into a commons chunk
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    // Provides context to Angular's use of System.import
    new ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('src')
    ),
    // Generates an HTML5 file that includes all webpack bundles
    new HtmlWebpackPlugin({
      template: helpers.root('src', 'index.html'),
      favicon: helpers.root('src', 'favicon.ico')
    }),
    // Copies all i18n files into dist/i18n
    new CopyWebpackPlugin([{
      from: helpers.root('src', 'i18n'),
      to: 'i18n'
    }]),
  ]

};
