import React from 'react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-actions' or i... Remove this comment to see the full error message
import { action } from '@storybook/addon-actions';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-a11y' or its ... Remove this comment to see the full error message
import { withA11y } from '@storybook/addon-a11y';
import InputTextarea from './index';

const input = {
  value: 'this is some longer text, that is probably longer than a standard input',
  onChange: action('on-change'),
};

storiesOf('InputTextarea', module)
  .addDecorator(withA11y)
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
