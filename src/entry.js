// @flow strict

// Entry point

import { createElement } from 'react';
import { render } from 'react-dom';
import invariant from 'invariant';
import { App } from './app';

const rootElement = document.getElementById('root');
invariant(rootElement != null, 'No root element');

const renderApp = () => {
  render(createElement(App), rootElement);
};

renderApp();

// Hot reloading
module.hot.accept(renderApp);
