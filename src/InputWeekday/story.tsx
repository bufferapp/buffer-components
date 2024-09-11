import React from 'react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-actions' or i... Remove this comment to see the full error message
import { action } from '@storybook/addon-actions';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-a11y' or its ... Remove this comment to see the full error message
import { withA11y } from '@storybook/addon-a11y';
import InputWeekday from './index';


storiesOf('InputWeekday', module)
  .addDecorator(withA11y)
  .add('default', () => (
    <InputWeekday
      input={{
        onChange: action('on-change'),
        value: '',
      }}
    />
  ))
  .add('with value set', () => (
    <InputWeekday
      input={{
        onChange: action('on-change'),
        value: {
          day: 'tue',
        },
      }}
    />
  ))
  .add('with form submitting', () => (
    <InputWeekday
      input={{
        onChange: action('on-change'),
        value: {
          day: 'wed',
        },
      }}
      meta={{
        submitting: true,
      }}
    />
  ))
  .add('small', () => (
    <InputWeekday
      input={{
        onChange: action('on-change'),
        value: ''
      }}
      fontSize={'small'}
    />
  ));
