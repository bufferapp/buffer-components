import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import InputDate from './index';
import moment from 'moment';

const daySelected = moment('2015-08-22').toDate();
const date = [
  moment('2015-07-01').toDate(),
  moment('2015-08-01').toDate(),
];

storiesOf('InputDate', module)
  .addDecorator(checkA11y)
  .add('default', () => (
    <InputDate
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
  .add('display one month in past', () => (
    <InputDate
      input={{
        value: '',
        onChange: action('on-change'),
      }}
      firstMonthToDisplay={date[0]}
      initialMonth={date[1]}
    />
  ))
  .add('with day selected', () => (
    <InputDate
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
      selectedDays={daySelected}
    />
  ))
  .add('with disabled days', () => (
    <InputDate
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
    <InputDate
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
    <InputDate
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
    <InputDate
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
