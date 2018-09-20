import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import NavBar from './index'
import moment from 'moment';


const date = [
  moment('2018-09-01'),
  moment('2018-10-02'),
];

storiesOf('InputDate NavBar', module)
  .addDecorator(checkA11y)
  .add('default', () => (
    <NavBar
      firstMonthtoDisplay={date[0]}
      month={date[1]}/>
  ))
  .add('navigation disabled', () => (
    <NavBar
      firstMonthtoDisplay={date[0]}
      month={date[0]}
    />
  ));
