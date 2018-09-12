import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import Datepicker from './index';


storiesOf('Datepicker', module)
  .addDecorator(checkA11y)
  .add('default', () => (
    <Datepicker
      input={{
        value: '',
        onChange: action('on-change'),
      }}
      initialMonthYear={{
        month: 7,
        year: 2015,
      }}
    />
  ))
  .add('with day selected', () => (
    <Datepicker
      input={{
        value: {
          day: 21,
          month: 7,
          year: 2015,
        },
        onChange: action('on-change'),
      }}
      initialMonthYear={{
        month: 7,
        year: 2015,
      }}
    />
  ))
  .add('with disabled days', () => (
    <Datepicker
      input={{
        value: '',
        onChange: action('on-change'),
      }}
      initialMonthYear={{
        month: 7,
        year: 2015,
      }}
      disableBefore={{
        day: 21,
        month: 7,
        year: 2015,
      }}
    />
  ))
  .add('with error', () => (
    <Datepicker
      input={{
        value: '',
        onChange: action('on-change'),
      }}
      initialMonthYear={{
        month: 7,
        year: 2015,
      }}
      meta={{
        error: 'a date must be selected',
        touched: true,
      }}
    />
  ))
  .add('with submitting', () => (
    <Datepicker
      input={{
        value: '',
        onChange: action('on-change'),
      }}
      initialMonthYear={{
        month: 7,
        year: 2015,
      }}
      meta={{
        submitting: true,
      }}
    />
  ))
  .add('with start of week monday', () => (
    <Datepicker
      input={{
        value: '',
        onChange: action('on-change'),
      }}
      initialMonthYear={{
        month: 7,
        year: 2015,
      }}
      firstDayOfWeek={1}
    />
  ));
