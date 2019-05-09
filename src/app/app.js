// @flow strict

import { createElement } from 'react';
import { AppView } from './app-view';

// React Hot Loader
let hotReload = App => App;

// PR to fix: https://github.com/gaearon/react-hot-loader/pull/1244
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  hotReload = require('react-hot-loader').hot(module);
}

export const App = hotReload(() => createElement(AppView));
