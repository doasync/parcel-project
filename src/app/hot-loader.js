// React Hot Loader
// Uncomment when fixed
// export { hot as hotLoader } from 'react-hot-loader'

// eslint-disable-next-line import/no-mutable-exports
let hotLoader = Component => Component;

// Remove hot loader from production bundle
// PR to fix: https://github.com/gaearon/react-hot-loader/pull/1247
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  hotLoader = require('react-hot-loader').hot(module);
}

export { hotLoader };
