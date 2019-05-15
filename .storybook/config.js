import { configure } from '@storybook/react';

const req = require.context('../src', true, /\bstories\.jsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
