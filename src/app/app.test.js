import { createElement } from 'react';
import { render } from 'react-testing-library';
import { App } from './app';

test('renders container', () => {
  const { container } = render(createElement(App));
  expect(container).toBeInTheDocument();
});
