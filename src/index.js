// @flow

// Entry point

import { createElement } from 'react';
import { render } from 'react-dom';
import { App } from './app';

const rootElement = document.getElementById('root');

if (rootElement === null) {
  throw new Error('No root element');
}

const renderApp = () => {
  render(createElement(App), rootElement);
};

renderApp();

// Hot reloading
if (module.hot) {
  module.hot.accept(renderApp);
}
