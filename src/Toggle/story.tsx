import React from 'react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-actions' or i... Remove this comment to see the full error message
import { action } from '@storybook/addon-actions';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-a11y' or its ... Remove this comment to see the full error message
import { withA11y } from '@storybook/addon-a11y';
import Toggle from './index';

storiesOf('Toggle', module)
  .addDecorator(withA11y)
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
