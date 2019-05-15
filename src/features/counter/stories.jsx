import React from 'react';

import { storiesOf } from '@storybook/react';
import { Counter } from './counter';

storiesOf('Counter', module).add('basic', () => <Counter />);
