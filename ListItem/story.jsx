import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import ListItem from './index';

storiesOf('ListItem', module)
  .addDecorator(checkA11y)
  .add('default', () => (
    <ListItem>Bananas</ListItem>
  ));
