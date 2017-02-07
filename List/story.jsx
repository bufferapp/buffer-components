import React from 'react';
import { storiesOf } from '@kadira/storybook';
import List from './index';

storiesOf('List')
  .add('default', () => (
    <List items={['apples', 'bananas', 'oranges']} />
  ));
