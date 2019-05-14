import React from 'react';
import { ScreenBase, Spinner } from '../ui';

export const LoaderView = () => (
  <ScreenBase>
    <h2>Loading...</h2>
    <Spinner />
  </ScreenBase>
);
