// @flow strict

import {
  createElement, useState, useEffect, useRef,
} from 'react';
import { CounterView } from './counter-view';

function useInterval(callback, delay) {
  const savedCallback = useRef(() => {});

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return undefined;
  }, [delay]);
}

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  useInterval(() => {
    // Your custom logic here
    setCounter(counter + 1);
  }, 200);

  return createElement(CounterView, { counter });
};
