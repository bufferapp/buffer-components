import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import InputEmail from './index';

const input = {
  value: 'test@test.com',
  onChange: action('on-change'),
};

storiesOf('InputEmail')
  .addDecorator(checkA11y)
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
  ));
