
export const listen = (generator, fn) => {
  let breaker = false;
  const unsubscribe = () => {
    breaker = true;
  };
  async function caller () {
    for await (const value of generator) {
      if (breaker) break;
      fn(value);
    }
  }
  caller();
  return unsubscribe;
};
