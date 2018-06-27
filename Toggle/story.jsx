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
  .add('enabled', () => (
    <Toggle onClick={action('onClick')} enabled />
  ))
  .add('custom disabledText', () => (
    <Toggle onClick={action('onClick')} disabledText="Off" />
  ))
  .add('custom enabledText', () => (
    <Toggle onClick={action('onClick')} enabledText="On" enabled />
  ));
