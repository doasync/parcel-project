import { createElement } from 'react';
import { render } from 'react-dom';
import { App } from './app';

const rootElement = document.getElementById('root');
render(createElement(App), rootElement);
