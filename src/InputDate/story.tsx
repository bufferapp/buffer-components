import React from 'react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-actions' or i... Remove this comment to see the full error message
import { action } from '@storybook/addon-actions';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-a11y' or its ... Remove this comment to see the full error message
import { withA11y } from '@storybook/addon-a11y';
import InputDate from './index';
import moment from 'moment';

const daySelected = moment('2015-08-22').toDate();
const date = [
  moment('2015-07-01').toDate(),
  moment('2015-08-01').toDate(),
];

storiesOf('InputDate', module)
  .addDecorator(withA11y)
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
      firstMonthToDisplay={date[1]}
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
      firstMonthToDisplay={date[1]}
      // @ts-expect-error TS(2322): Type '{ input: { value: { day: number; month: numb... Remove this comment to see the full error message
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
        // @ts-expect-error TS(2322): Type '{ day: number; month: number; year: number; ... Remove this comment to see the full error message
        day: 21,
        month: 7,
        year: 2015,
      }}
      firstMonthToDisplay={date[1]}
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
      firstMonthToDisplay={date[1]}
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
      firstMonthToDisplay={date[1]}
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
      firstMonthToDisplay={date[1]}
      firstDayOfWeek={1}
    />
  ));
