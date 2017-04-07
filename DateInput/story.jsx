import React from 'react';
import {
  storiesOf,
  action,
} from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import DateInput from './index';

const value = '';

const isTodayModifier = { isToday: true };

storiesOf('DateInput')
  .addDecorator(checkA11y)
  .add('default', () => (
    <DateInput value={value} onChange={action('change-event')}>
    </DateInput>
  ))
  .add('isToday', () => (
    <DateInput
      value={value}
      onChange={action('change-event')}
      modifiers={isTodayModifier}
    >
    </DateInput>
  ));
