'use strict';

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const merge = require('webpack-merge');
const prodConfig = require('./webpack.prod.js');

const paths = require('./paths');

// ------------------------- WebpackBundleAnalyzer config ---------------------------------
module.exports = merge(prodConfig, {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerHost: 'localhost',
      analyzerPort: 8888,
      defaultSizes: 'parsed',
      openAnalyzer: false,
      generateStatsFile: true,
      statsFilename: paths.webpackStats,
      logLevel: 'info',
    }),
  ],
  stats: 'normal',
  profile: true,
});
