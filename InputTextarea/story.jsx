import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from '@storybook/addon-a11y';
import InputTextarea from './index';

const input = {
  value: 'this is some longer text, that is probably longer than a standard input',
  onChange: action('on-change'),
};

storiesOf('InputTextarea', module)
  .addDecorator(checkA11y)
  .add('default', () => <InputTextarea input={input} />)
  .add('with label', () => <InputTextarea input={input} label="Text Area" />)
  .add('with error', () => (
    <InputTextarea
      label="Text Area"
      input={input}
      meta={{
        error: 'text is tooooo long',
        touched: true,
      }}
    />
  ))
  .add('with placeholder', () => <InputTextarea label="Text Area" placeholder="write a novel" />)
  .add('with submitting = true', () => (
    <InputTextarea
      input={input}
      meta={{
        submitting: true,
      }}
    />
  ));
