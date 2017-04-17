import React from 'react';
import {
  storiesOf,
  action,
} from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import InputTime from './index';


storiesOf('InputTime')
  .addDecorator(checkA11y)
  .add('default', () => (
    <InputTime />
  ))
  .add('with 24 hour selection', () => (
    <InputTime select24Hours />
  ))
  .add('with value set', () => (
    <InputTime
      input={{
        value: {
          hours: 10,
          minutes: 32,
        },
        onChange: action('on-change'),
      }}
    />
  ))
  .add('with afternoon value set', () => (
    <InputTime
      input={{
        value: {
          hours: 12,
          minutes: 32,
        },
        onChange: action('on-change'),
      }}
    />
  ))
  .add('with afternoon value set and 24 hour selection', () => (
    <InputTime
      input={{
        value: {
          hours: 16,
          minutes: 33,
        },
        onChange: action('on-change'),
      }}
      select24Hours
    />
  ));
