// @flow

// import { hot } from 'react-hot-loader';
import { AppView } from './app-view';

// Fix production bundle
// PR: https://github.com/gaearon/react-hot-loader/pull/1247
let hotLoader = Component => Component;
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  hotLoader = require('react-hot-loader').hot(module);
}

export const App = hotLoader(AppView);
