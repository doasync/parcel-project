import {
  createEffect, createEvent, createStore, combine,
} from 'effector';

import {
  DeviceEmitter,
  MessageEmitter,
  fakeLoadData,
  fakeConnectDevice,
  listen,
} from './fake';

export const SCANNER = 'scanner';
export const LOADER = 'loader';
export const CONNECT = 'connect';
export const INTERFACE = 'interface';

export const $isLoading = createStore(false);
export const loadData = createEffect().use(fakeLoadData);

export const $isScanning = createStore(false);

export const $devices = createStore([]);
export const devicesUpdated = createEvent();

export const $isConnecting = createStore(false);
export const connectDevice = createEffect().use(fakeConnectDevice);
export const $connectedDevice = createStore(null);

export const $isInterfacing = createStore(false);
export const $isSuspended = createStore(false);
export const $isListening = combine(
  $isInterfacing, $isSuspended,
  (isInterfacing, isSuspended) => isInterfacing && !isSuspended,
);

export const $message = createStore('');
export const messageReceived = createEvent();
export const messageAccepted = createEvent();

export const $screen = createStore(null);
export const quit = createEvent();

const showScreen = screen => (state, show) => (show ? screen : state);

$screen
  .on($isLoading, showScreen(LOADER))
  .on($isScanning, showScreen(SCANNER))
  .on($isConnecting, showScreen(CONNECT))
  .on($isInterfacing, showScreen(INTERFACE))
  .reset(quit);

$isLoading
  .on(loadData, () => true)
  .reset(loadData.done)
  .reset(loadData.fail);

$isScanning
  .on(loadData.done, () => true)
  .on(connectDevice.fail, () => true)
  .reset(connectDevice)
  .reset(quit);

$devices
  .on(devicesUpdated, (state, devices) => devices);

let deviceListener = null;

$isScanning.watch((isScanning) => {
  if (isScanning && !deviceListener) {
    deviceListener = listen(DeviceEmitter(), devicesUpdated);
  }
  if (!isScanning && deviceListener) {
    deviceListener();
    deviceListener = null;
  }
});

$isConnecting
  .on(connectDevice, () => true)
  .reset(connectDevice.done)
  .reset(connectDevice.fail);

$connectedDevice
  .on(connectDevice.done, (state, { result }) => result);

$isInterfacing
  .on(connectDevice.done, () => true)
  .reset(quit);

$isSuspended
  .on(messageReceived, () => true)
  .reset(messageAccepted);

let messageListener = null;

$isListening.watch((isListening) => {
  if (isListening && !deviceListener) {
    messageListener = listen(MessageEmitter(), messageReceived);
  }
  if (!isListening && messageListener) {
    messageListener();
    messageListener = null;
  }
});

$message
  .on(messageReceived, (state, message) => message)
  .reset(messageAccepted);
