import * as React from 'react';
import { Normalize } from 'styled-normalize';
import { Root } from './root';

import '../fonts/stylesheet.css';

// App providers
export const AppView = () => (
  <>
    <Normalize />
    <Root />
  </>
);
