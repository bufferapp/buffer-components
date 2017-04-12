import React from 'react';
import {
  storiesOf,
  action,
} from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import InputDate from './index';

const input = {
  value: new Date(),
  onChange: action('change-event'),
};


storiesOf('InputDate')
  .addDecorator(checkA11y)
  .add('default', () => (
    <InputDate
      input={input}
    />
  ));
