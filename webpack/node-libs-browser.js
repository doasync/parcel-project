'use strict';

// The list of node core libs (all off by default)
const allOff = {
  console: false,
  global: false,
  process: false,
  __filename: false,
  __dirname: false,
  Buffer: false,
  setImmediate: false,
  assert: false,
  buffer: false,
  child_process: false,
  cluster: false,
  constants: false,
  crypto: false,
  dgram: false,
  dns: false,
  domain: false,
  events: false,
  fs: false,
  http: false,
  https: false,
  module: false,
  net: false,
  os: false,
  path: false,
  punycode: false,
  querystring: false,
  readline: false,
  repl: false,
  stream: false,
  string_decoder: false,
  sys: false,
  timers: false,
  tls: false,
  tty: false,
  url: false,
  util: false,
  vm: false,
  zlib: false,
};

// The node core libs for in browser usage
module.exports = {
  ...allOff,
  global: true,
};
