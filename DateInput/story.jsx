import React from 'react';
import {
  storiesOf,
  action,
} from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import DateInput from './index';

const input = {
  value: new Date(),
  onChange: action('change-event'),
};


storiesOf('DateInput')
  .addDecorator(checkA11y)
  .add('default', () => (
    <DateInput
      input={input}
    />
  ));
