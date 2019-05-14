import { delay } from './delay';

export const fakeConnectDevice = async (device) => {
  await delay(5000);

  if (Math.random() >= 0.5) {
    throw new Error('Connection failed');
  }

  return device;
};
