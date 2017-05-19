import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import Input from './index';

const input = {
  value: 'user123',
  onChange: action('on-change'),
};

storiesOf('Input')
  .addDecorator(checkA11y)
  .add('default', () => (
    <Input input={input} />
  ))
  .add('with label', () => (
    <Input input={input} label={'Username'} />
  ))
  .add('with error', () => (
    <Input
      label={'Username'}
      input={input}
      meta={{
        error: 'unknown user',
        touched: true,
      }}
    />
  ))
  .add('with placeholder', () => (
    <Input
      label={'Username'}
      placeholder={'ex: kitteh1234'}
    />
  ))
  .add('with type = password', () => (
    <Input
      input={input}
      type={'password'}
    />
  ))
  .add('with type = email', () => (
    <Input
      input={{
        value: 'test@test.com',
        onChange: action('on-change'),
      }}
      type={'email'}
    />
  ))
  .add('with submitting = true', () => (
    <Input
      input={input}
      meta={{
        submitting: true,
      }}
    />
  ))
  .add('focused', () => (
    <Input input={input} focused />
  ))
  .add('onFocus + onBlur', () => (
    <Input
      input={input}
      onFocus={action('on-focus')}
      onBlur={action('on-blur')}
    />
  ));
