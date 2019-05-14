/* eslint-disable no-await-in-loop */

import { delay } from './delay';

const iWatch = { id: '3453', name: 'iWatch', kind: 'i-watch' };
const iPhone = { id: '6325', name: 'iPhone', kind: 'i-phone' };
const MacBook = { id: '5618', name: 'MacBook', kind: 'mac-book' };

export async function* DeviceEmitter () {
  // noinspection InfiniteLoopJS
  while (true) {
    await delay(3000);
    yield [iWatch];
    await delay(3000);
    yield [iWatch, iPhone];
    await delay(3000);
    yield [iWatch, iPhone, MacBook];
    await delay(3000);
    yield [iPhone, MacBook];
    await delay(3000);
    yield [MacBook];
    await delay(3000);
    yield [];
  }
}
