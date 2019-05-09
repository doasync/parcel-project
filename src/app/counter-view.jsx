// @flow strict

import * as React from 'react';

type Props = {|
  counter: number,
  increment: () => void,
|};

export const CounterView = ({ counter, increment }: Props) => (
  <>
    <div>
      Counter:
      {counter}
    </div>
    <br />
    <button type="button" onClick={increment}>
      +
    </button>
  </>
);
