import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
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
