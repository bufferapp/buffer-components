import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import InputText from './index';

const input = {
  value: 'hi',
  onChange: action('on-change'),
};

storiesOf('InputText')
  .addDecorator(checkA11y)
  .add('default', () => (
    <InputText input={input} />
  ))
  .add('with label', () => (
    <InputText input={input} label={'Username'} />
  ))
  .add('with error', () => (
    <InputText
      label={'Username'}
      input={input}
      meta={{
        error: 'unknown user',
        touched: true,
      }}
    />
  ));
