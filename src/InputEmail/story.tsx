import React from 'react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-actions' or i... Remove this comment to see the full error message
import { action } from '@storybook/addon-actions';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-a11y' or its ... Remove this comment to see the full error message
import { withA11y } from '@storybook/addon-a11y';
import InputEmail from './index';

const input = {
  value: 'test@test.com',
  onChange: action('on-change'),
};

storiesOf('InputEmail', module)
  .addDecorator(withA11y)
  .add('default', () => (
    <InputEmail input={input} />
  ))
  .add('with label', () => (
    <InputEmail input={input} label={'Email'} />
  ))
  .add('with error', () => (
    <InputEmail
      label={'Email'}
      input={input}
      meta={{
        error: 'unknown email address',
        touched: true,
      }}
    />
  ))
  .add('with placeholder', () => (
    <InputEmail
      label={'Email'}
      placeholder={'ex: test@test.com'}
    />
  ))
  .add('with submitting = true', () => (
    <InputEmail
      input={input}
      meta={{
        submitting: true,
      }}
    />
  ));
