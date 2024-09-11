import React from 'react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-actions' or i... Remove this comment to see the full error message
import { action } from '@storybook/addon-actions';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-a11y' or its ... Remove this comment to see the full error message
import { withA11y } from '@storybook/addon-a11y';
import Weekday from './index';
import DayPicker from 'react-day-picker';

const localeUtils = DayPicker.LocaleUtils;

storiesOf('InputDateWeekdays', module)
  .addDecorator(withA11y)
  .add('Short Weekday', () => (
    // @ts-expect-error TS(2322): Type '{ localeUtils: LocaleUtils; locale: string; ... Remove this comment to see the full error message
    <Weekday localeUtils={localeUtils} locale={'en'} weekday={0}/>
  ))
  .add('Medium Weekday', () => (
    // @ts-expect-error TS(2322): Type '{ localeUtils: LocaleUtils; weekdayLength: s... Remove this comment to see the full error message
    <Weekday localeUtils={localeUtils} weekdayLength={'medium'} locale={'en'} weekday={0}/>
  ))
  .add('Long Weekday', () => (
    // @ts-expect-error TS(2322): Type '{ localeUtils: LocaleUtils; weekdayLength: s... Remove this comment to see the full error message
    <Weekday localeUtils={localeUtils} weekdayLength={'long'} locale={'en'} weekday={0}/>
  ));
