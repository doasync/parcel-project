import React from 'react';
import {
  Device, Flex, Radar, ScreenBase,
} from '../ui';
import { LinkButton } from '../ui/buttons/link-button';

export const ScannerView = ({ devices, quit, connectDevice }) => (
  <ScreenBase>
    <LinkButton onClick={quit}>Quit</LinkButton>
    <h2>Scanning for devices</h2>
    <Radar />
    <Flex>
      {devices.map(device => (
        <Device
          key={device.kind}
          kind={device.kind}
          onClick={() => connectDevice(device)}
        />
      ))}
    </Flex>
  </ScreenBase>
);
