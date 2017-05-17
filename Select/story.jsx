import React from 'react';
import {
  storiesOf,
} from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import Select from './index';

const options = [
  'London',
  'New York',
  'San Francisco',
  'Tokyo',
];

storiesOf('Select')
  .addDecorator(checkA11y)
  .add('default', () => (
    <Select options={options} />
  ));
