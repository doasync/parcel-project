// Root component of the prototype

import { createElement, useEffect } from 'react';
import { useStore } from 'effector-react';
import { $screen, loadData } from './model';
import { screenMap } from './screen-map';

export const Prototype = () => {
  const screen = useStore($screen);

  useEffect(() => {
    loadData();
  }, []);

  const Screen = screenMap[screen];
  return Screen ? createElement(Screen) : null;
};
