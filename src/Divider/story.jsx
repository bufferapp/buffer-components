import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import Divider from './index';

storiesOf('Divider', module)
  .addDecorator(checkA11y)
  .add('default', () => (
    <Divider />
  ))
  .add('black divider', () => (
    <Divider color="black" />
  ))
  .add('top margin: 5rem', () => (
    <Divider marginTop="5rem" />
  ))
  .add('bottom margin: 5rem', () => (
    <div>
      <Divider marginBottom="5rem" />
      <div>Next Thing</div>
    </div>
  ));
