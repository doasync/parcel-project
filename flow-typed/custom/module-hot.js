// @flow strict

type Callback = () => void | Promise<void>
type Paths = string | Array<string>

declare var module: {
  id: string,
  hot: {
    accept(pathsOrCallback: Callback | Paths, callback?: Callback): void;
    dispose(callback: Callback): void;
  },
};
