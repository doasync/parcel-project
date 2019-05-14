import React from 'react';
import {
  ScreenBase, Status, Message, AcceptButton, Device, LinkButton,
} from '../ui';

export const InterfaceView = ({
  device, message, accept, quit,
}) => (
  <ScreenBase>
    <LinkButton onClick={quit}>Quit</LinkButton>
    {message ? (
      <Message>
        <Device kind={device.kind} />
        <h2>{message}</h2>
        <AcceptButton onClick={accept} />
      </Message>
    ) : (
      <>
        <h1>
          {device.name}
        </h1>
        <Status>Active</Status>
      </>
    )}
  </ScreenBase>
);
