import { createElement } from 'react';
import { render } from 'react-testing-library';
import { App } from './app';

test('renders hello world', () => {
  const { getByText } = render(createElement(App));
  expect(getByText('Hello world!')).toBeInTheDocument();
});
