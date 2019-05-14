/* eslint-disable no-await-in-loop */

import { delay } from './delay';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur cras amet.';
const randomDelay = () => delay(Math.floor(Math.random() * 5000) + 1000);

export async function* MessageEmitter () {
  // noinspection InfiniteLoopJS
  while (true) {
    await randomDelay();
    yield loremIpsum;
  }
}
