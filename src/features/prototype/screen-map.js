import {
  LOADER, SCANNER, CONNECT, INTERFACE,
} from './model';
import {
  Scanner, Loader, Connect, Interface,
} from './screens';

export const screenMap = {
  [SCANNER]: Scanner,
  [LOADER]: Loader,
  [CONNECT]: Connect,
  [INTERFACE]: Interface,
};
