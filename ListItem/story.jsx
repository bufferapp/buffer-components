import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ListItem from './index';

storiesOf('ListItem')
  .add('default', () => (
    <ListItem>Bananas</ListItem>
  ));
