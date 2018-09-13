import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import Weekday from './index'
import DayPicker from 'react-day-picker';

const localeUtils = DayPicker.LocaleUtils;

storiesOf('Datepicker Weekdays', module)
  .addDecorator(checkA11y)
  .add('Short Weekday', () => (
    <Weekday localeUtils={localeUtils} locale={'en'} weekday={0}/>
  ))
  .add('Medium Weekday', () => (
    <Weekday localeUtils={localeUtils} weekdayLenght={'medium'} locale={'en'} weekday={0}/>
  ))
  .add('Long Weekday', () => (
    <Weekday localeUtils={localeUtils} weekdayLenght={'long'} locale={'en'} weekday={0}/>
  ));
