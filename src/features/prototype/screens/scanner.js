import { createElement } from 'react';
import { useStore } from 'effector-react';
import { $devices, quit } from '../model';
import { ScannerView } from './scanner-view';

export const Scanner = () => {
  const devices = useStore($devices);

  return createElement(ScannerView, { devices, quit });
};
