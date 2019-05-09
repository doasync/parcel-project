// @flow strict

type Callback = () => void | Promise<void>

declare var module: {
  id: string,
  hot: {
    accept(callback?: Callback): void;
    dispose(callback: Callback): void;
  },
};
