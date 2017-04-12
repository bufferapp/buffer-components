import React from 'react';
import {
  storiesOf,
  action,
} from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import DateInput from './index';

const value = new Date();

storiesOf('DateInput')
  .addDecorator(checkA11y)
  .add('default', () => (
    <DateInput
      onChange={action('change-event')}
      value={value}
    >
    </DateInput>
  ));
