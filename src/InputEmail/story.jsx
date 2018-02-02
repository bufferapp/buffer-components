import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import InputEmail from './index';

const input = {
  value: 'test@test.com',
  onChange: action('on-change'),
};

storiesOf('InputEmail', module)
  .addDecorator(checkA11y)
  .add('default', () => (
    <InputEmail input={input} />
  ))
  .add('with label', () => (
    <InputEmail input={input} label="Email" />
  ))
  .add('with error', () => (
    <InputEmail
      label="Email"
      input={input}
      meta={{
        error: 'unknown email address',
        touched: true,
      }}
    />
  ))
  .add('with placeholder', () => (
    <InputEmail
      label="Email"
      placeholder="ex: test@test.com"
    />
  ))
  .add('with submitting = true', () => (
    <InputEmail
      input={input}
      meta={{
        submitting: true,
      }}
    />
  ))
  .add('focused', () => (
    <InputEmail input={input} focused />
  ))
  .add('onFocus + onBlur', () => (
    <InputEmail
      input={input}
      onFocus={action('on-focus')}
      onBlur={action('on-blur')}
    />
  ));
