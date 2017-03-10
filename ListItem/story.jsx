import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import ListItem from './index';

storiesOf('ListItem')
  .addDecorator(checkA11y)
  .add('default', () => (
    <ListItem>Bananas</ListItem>
  ));
