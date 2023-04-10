import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import Weekday from './index';
import DayPicker from 'react-day-picker';

const localeUtils = DayPicker.LocaleUtils;

storiesOf('InputDateWeekdays', module)
  .addDecorator(withA11y)
  .add('Short Weekday', () => (
    <Weekday localeUtils={localeUtils} locale={'en'} weekday={0}/>
  ))
  .add('Medium Weekday', () => (
    <Weekday localeUtils={localeUtils} weekdayLength={'medium'} locale={'en'} weekday={0}/>
  ))
  .add('Long Weekday', () => (
    <Weekday localeUtils={localeUtils} weekdayLength={'long'} locale={'en'} weekday={0}/>
  ));
