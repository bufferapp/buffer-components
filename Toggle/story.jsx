import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import Toggle from './index';

storiesOf('Toggle', module)
  .addDecorator(checkA11y)
  .add('default', () => (
    <Toggle />
  ))
  .add('enabled', () => (
    <Toggle enabled />
  ));
