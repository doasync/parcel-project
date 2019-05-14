import { createElement } from 'react';
import { useStore } from 'effector-react';
import { InterfaceView } from './interface-view';
import {
  $message, messageAccepted, $connectedDevice, quit,
} from '../model';

export const Interface = () => {
  const message = useStore($message);
  const device = useStore($connectedDevice);

  return createElement(InterfaceView, {
    device,
    message,
    accept: messageAccepted,
    quit,
  });
};
