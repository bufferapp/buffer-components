import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import InputTime from './index';


storiesOf('InputTime', module)
  .addDecorator(withA11y)
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
  .add('minimal', () => (
    <InputTime
      input={{
        onChange: action('on-change'),
        value: '',
      }}
      minimal
    />
  ))
  .add('minimal with 24 hour selection', () => (
    <InputTime
      input={{
        onChange: action('on-change'),
        value: '',
      }}
      minimal
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
  ))
  .add('displayTimeColon', () => (
    <InputTime
      input={{
        onChange: action('on-change'),
        value: '',
      }}
      displayTimeColon
    />
  ))
  .add('displayTimeColon minimal', () => (
    <InputTime
      input={{
        onChange: action('on-change'),
        value: '',
      }}
      displayTimeColon
      minimal
    />
  ))
  .add('small', () => (
    <InputTime
      input={{
        onChange: action('on-change'),
        value: '',
      }}
      fontSize={'small'}
    />
  ));
