import React from 'react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-actions' or i... Remove this comment to see the full error message
import { action } from '@storybook/addon-actions';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-a11y' or its ... Remove this comment to see the full error message
import { withA11y } from '@storybook/addon-a11y';
import InputPassword from './index';

const input = {
  value: 'password',
  onChange: action('on-change'),
};

storiesOf('InputPassword', module)
  .addDecorator(withA11y)
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
