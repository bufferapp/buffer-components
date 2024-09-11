import React from 'react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-actions' or i... Remove this comment to see the full error message
import { action } from '@storybook/addon-actions';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-a11y' or its ... Remove this comment to see the full error message
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
