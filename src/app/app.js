import { createElement } from 'react';
import { AppView } from './app-view';
import { hotLoader } from './hot-loader';

export const App = hotLoader(() => createElement(AppView));
