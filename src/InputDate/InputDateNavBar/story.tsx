import React from 'react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-actions' or i... Remove this comment to see the full error message
import { action } from '@storybook/addon-actions';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-a11y' or its ... Remove this comment to see the full error message
import { withA11y } from '@storybook/addon-a11y';
import NavBar from './index';
import moment from 'moment';


const date = [
  moment('2018-09-01'),
  moment('2018-10-02'),
];

storiesOf('InputDateNavBar', module)
  .addDecorator(withA11y)
  .add('default', () => (
    <NavBar
      // @ts-expect-error TS(2740): Type 'Moment' is missing the following properties ... Remove this comment to see the full error message
      firstMonthToDisplay={date[0]}
      month={date[1]}/>
  ))
  .add('navigation disabled', () => (
    <NavBar
      // @ts-expect-error TS(2322): Type 'Moment' is not assignable to type 'Date'.
      firstMonthToDisplay={date[0]}
      month={date[0]}
    />
  ));
