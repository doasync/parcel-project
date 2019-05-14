import { delay } from './delay';

export const fakeLoadData = async () => {
  await delay(5000);

  return {
    success: true,
  };
};
