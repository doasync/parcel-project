import { createElement } from 'react';
import { ConnectView } from './connect-view';
import { quit } from '../model';

export const Connect = () => createElement(ConnectView, { quit });
