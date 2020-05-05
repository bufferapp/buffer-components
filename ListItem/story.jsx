import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import ListItem from './index';

storiesOf('ListItem', module)
  .addDecorator(withA11y)
  .add('default', () => (
    <ListItem>Bananas</ListItem>
  ));
