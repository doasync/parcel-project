// @flow strict

import { createElement, useState } from 'react';
import { CounterView } from './counter-view';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return createElement(CounterView, {
    counter,
    increment: () => setCounter(counter + 1),
  });
};
