import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import Datepicker from './index';
import moment from 'moment';


const date = [
  moment('2015-07-01').toDate(),
  moment('2015-08-01').toDate(),
];

const daySelected = moment('2015-07-22').toDate();

storiesOf('Datepicker', module)
  .addDecorator(checkA11y)
  .add('default', () => (
    <Datepicker
      firstMonthToDisplay={date[0]}
      initialMonth={date[0]}
    />
  ))
  .add('display one month in the past', () => (
    <Datepicker
      firstMonthToDisplay={date[0]}
      initialMonth={date[1]}
    />
  ))
  .add('with day selected', () => (
    <Datepicker
      firstMonthToDisplay={date[0]}
      initialMonth={date[0]}
      selectedDays={daySelected}
    />
  ))
  .add('with start of week monday', () => (
    <Datepicker
      firstMonthToDisplay={date[0]}
      initialMonth={date[0]}
      firstDayOfWeek={1}
    />
  ));
