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
    <InputTime
      input={{
        onChange: action('on-change'),
        value: '',
      }}
    />
  ))
  .add('disabled', () => (
    <InputTime
      disabled
      input={{
        onChange: action('on-change'),
        value: '',
      }}
    />
  ))
  .add('noStyle', () => (
    <InputTime
      input={{
        onChange: action('on-change'),
        value: '',
      }}
      noStyle
    />
  ))
  .add('noStyle with 24 hour selection', () => (
    <InputTime
      input={{
        onChange: action('on-change'),
        value: '',
      }}
      noStyle
      select24Hours
    />
  ))
  .add('with 24 hour selection', () => (
    <InputTime
      input={{
        onChange: action('on-change'),
        value: '',
      }}
      select24Hours
    />
  ))
  .add('with value set', () => (
    <InputTime
      input={{
        onChange: action('on-change'),
        value: {
          hours: 10,
          minutes: 32,
        },
      }}
    />
  ))
  .add('with afternoon value set', () => (
    <InputTime
      input={{
        onChange: action('on-change'),
        value: {
          hours: 11,
          minutes: 32,
        },
      }}
    />
  ))
  .add('with afternoon value set and 24 hour selection', () => (
    <InputTime
      input={{
        onChange: action('on-change'),
        value: {
          hours: 16,
          minutes: 33,
        },
      }}
      select24Hours
    />
  ))
  .add('with form submitting', () => (
    <InputTime
      input={{
        onChange: action('on-change'),
        value: {
          hours: 16,
          minutes: 33,
        },
      }}
      meta={{
        submitting: true,
      }}
    />
  ));
