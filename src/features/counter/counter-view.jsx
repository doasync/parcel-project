// @flow strict

import * as React from 'react';

type Props = {|
  counter: number,
|};

export const CounterView = ({ counter }: Props) => (
  <>
    <h1>Hello world.</h1>
    <h2>{counter}</h2>
  </>
);
