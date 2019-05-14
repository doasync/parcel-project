import React from 'react';
import { LinkButton, ScreenBase, Spinner } from '../ui';

export const ConnectView = ({ quit }) => (
  <ScreenBase>
    <LinkButton onClick={quit}>Quit</LinkButton>
    <h2>Connecting...</h2>
    <Spinner />
  </ScreenBase>
);
