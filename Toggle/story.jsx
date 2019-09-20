import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import Toggle from './index';

storiesOf('Toggle', module)
  .addDecorator(checkA11y)
  .add('default', () => (
    <Toggle onClick={action('onClick')} />
  ))
  .add('small', () => (
    <Toggle onClick={action('onClick')} size="small" />
  ))
  .add('on', () => (
    <Toggle onClick={action('onClick')} on />
  ))
  .add('custom offText', () => (
    <Toggle onClick={action('onClick')} offText="Off" />
  ))
  .add('custom onText', () => (
    <Toggle onClick={action('onClick')} onText="On" on />
  ))
  .add('disabled', () => (
    <Toggle onClick={action('onClick')} disabled />
  ))
  .add('disabled + on', () => (
    <Toggle onClick={action('onClick')} disabled on />
  ));
