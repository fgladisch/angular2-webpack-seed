const webpack = require('webpack')
const { AotPlugin } = require('@ngtools/webpack')
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const helpers = require('./helpers')

module.exports = () => {

  const isProd = process.env.ENV === 'production'

  return {

    // Array of extensions that will be used to resolve modules
    resolve: {
      extensions: ['.ts', '.js', '.json'],
      modules: [
        helpers.root('src'),
        helpers.root('node_modules')
      ],
    },

    // The entry point for the bundle
    entry: {
      'polyfills': helpers.root('src', 'polyfills.ts'),
      'app': [
        helpers.root('src', isProd ? 'main-aot.ts' : 'main-jit.ts'),
        helpers.root('src', 'assets', 'styles', 'main.scss')
      ]
    },

    module: {
      rules: [
        // Compiles all .ts files
        {
          test: /\.ts$/,
          loaders: isProd ? ['@ngtools/webpack'] : ['awesome-typescript-loader?silent=true', 'angular2-template-loader'],
          exclude: /\.spec\.ts$/
        },
        // Injects all html templates into their components and loads referenced assets
        {
          test: /\.html$/,
          loader: 'html-loader',
          exclude: helpers.root('src', 'index.html')
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
      new AotPlugin({
        tsConfigPath: helpers.root('tsconfig-aot.json'),
        entryModule: helpers.root('src', 'app', 'app.module#AppModule')
      }),
      // File name for the extracted styles
      new ExtractTextPlugin(`[name]${isProd ? '.[hash]' : ''}.css`),
      // Identifies common modules and puts them into a commons chunk
      new webpack.optimize.CommonsChunkPlugin({
        name: ['app', 'polyfills']
      }),
      // Provides context to Angular's use of System.import
      // See: https://github.com/AngularClass/angular2-webpack-starter/issues/993#issuecomment-283423040
      new ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)@angular/,
        helpers.root('src')
      ),
      // Generates a HTML5 file that includes all webpack bundles
      new HtmlWebpackPlugin({
        template: helpers.root('src', 'index.html'),
        favicon: helpers.root('src', 'favicon.ico')
      }),
      // Copies all i18n files into dist/i18n
      new CopyWebpackPlugin([{
        from: helpers.root('src', 'i18n'),
        to: 'i18n'
      }])
    ],

    performance: {
      hints: false
    }

  }

}
