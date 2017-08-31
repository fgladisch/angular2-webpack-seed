module.exports = function (config) {

  const testWebpackConfig = require('./webpack.test.js');

  config.set({

    // base path that will be used to resolve all patterns (e.g. files, exclude)
    basePath: '',

    // Karma will require() these plugins
    plugins: [
      'karma-jasmine',
      'karma-mocha-reporter',
      'karma-chrome-launcher',
      'karma-sourcemap-loader',
      'karma-webpack'
    ],

    /*
     * Frameworks to use
     *
     * available frameworks: https://npmjs.org/browse/keyword/karma-adapter
     */
    frameworks: ['jasmine'],

    // list of files to exclude
    exclude: [],

    /*
     * list of files / patterns to load in the browser
     *
     * we are building the test environment in ./karma-shim.js
     */
    files: [{
      pattern: './config/karma-shim.js',
      watched: false
    }],

    /*
     * preprocess matching files before serving them to the browser
     * available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
     */
    preprocessors: {
      './config/karma-shim.js': ['webpack', 'sourcemap']
    },

    // Webpack Config at ./webpack.test.js
    webpack: testWebpackConfig,

    // Webpack please don't spam the console when running in karma!
    webpackMiddleware: { stats: 'errors-only' },

    /*
     * test results reporter to use
     *
     * possible values: 'dots', 'progress'
     * available reporters: https://npmjs.org/browse/keyword/karma-reporter
     */
    reporters: ['mocha'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    /*
     * level of logging
     * possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
     */
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    /*
     * start these browsers
     * available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
     */
    browsers: ['ChromeHeadless'],

    /*
     * Continuous Integration mode
     * if true, Karma captures browsers, runs the tests and exits
     */
    singleRun: true
  });
};
