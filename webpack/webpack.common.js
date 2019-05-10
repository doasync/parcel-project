'use strict';

const paths = require('./paths');
const nodeLibsBrowser = require('./node-libs-browser');

// --------------------------Common config--------------------------------------
module.exports = {
  context: paths.root,
  resolve: {
    modules: ['node_modules', paths.appModules],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '~': paths.src,
    },
  },
  output: {
    path: paths.dist,
    crossOriginLoading: 'anonymous',
  },
  module: {
    wrappedContextCritical: true,
    strictExportPresence: true,
  },
  performance: {
    hints: false,
  },
  optimization: {
    noEmitOnErrors: true,
    namedModules: true, // better gzipped
    namedChunks: true,
  },
  node: nodeLibsBrowser,
};
