import React from 'react';
import {
  action,
  storiesOf,
} from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import Button from './index';

storiesOf('Button')
  .addDecorator(checkA11y)
  .add('default', () => (
    <Button onClick={action('on-click')}>Click Me</Button>
  ))
  .add('warning button', () => (
    <Button onClick={action('on-click')} warning>Warning</Button>
  ));
