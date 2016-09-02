var webpack           = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var helpers           = require('./helpers');

module.exports = {

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': [
      './src/main.ts',
      './src/assets/styles/main.scss'
    ]
  },

  module: {
    loaders: [
      // Compiles all .ts files
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
        exclude: /\.spec\.ts$/
      },
      // Injects all html templates into their components and loads referenced assets
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      // Copies all images and fonts into dist/assets
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file?name=assets/[name].[ext]'
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

  // Needed for bootstrap-sass
  // https://github.com/twbs/bootstrap-sass/issues/409
  sassLoader: {
    precision: 10
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/favicon.ico'
    }),
    // Copies all i18n files into dist/i18n
    new CopyWebpackPlugin([{
      from: 'src/i18n',
      to: 'i18n'
    }]),
    // Bootstrap doesn't use "$" and needs a global "jQuery"
    new webpack.ProvidePlugin({
      jQuery: 'jquery'
    })
  ]

};
