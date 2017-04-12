import React from 'react';
import {
  storiesOf,
  action,
} from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import InputDate from './index';


storiesOf('InputDate')
  .addDecorator(checkA11y)
  .add('default', () => (
    <InputDate
      input={{
        value: '',
        onChange: action('on-change'),
      }}
    />
  ))
  .add('with day selected', () => (
    <InputDate
      input={{
        value: new Date(),
        onChange: action('on-change'),
      }}
    />
  ))
  .add('with past dates selectable', () => (
    <InputDate
      input={{
        value: '',
        onChange: action('on-change'),
      }}
      allowSelectPastDays
    />
  ))
  .add('with error', () => (
    <InputDate
      input={{
        value: '',
        onChange: action('on-change'),
      }}
      meta={{
        error: 'a date must be selected',
        touched: true,
      }}
    />
  ));
