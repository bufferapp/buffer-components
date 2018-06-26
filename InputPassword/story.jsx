import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import InputPassword from './index';

const input = {
  value: 'password',
  onChange: action('on-change'),
};

storiesOf('InputPassword', module)
  .addDecorator(checkA11y)
  .add('default', () => (
    <InputPassword input={input} />
  ))
  .add('with label', () => (
    <InputPassword input={input} label={'Password'} />
  ))
  .add('with error', () => (
    <InputPassword
      label={'Password'}
      input={input}
      meta={{
        error: 'invalid password',
        touched: true,
      }}
    />
  ))
  .add('with submitting = true', () => (
    <InputPassword
      input={input}
      meta={{
        submitting: true,
      }}
    />
  ));
