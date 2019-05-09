// @flow strict

import { createElement } from 'react';
import { hot } from 'react-hot-loader';
import { AppView } from './app-view';

const hotReload = hot(module);

export const App = hotReload(() => createElement(AppView));
