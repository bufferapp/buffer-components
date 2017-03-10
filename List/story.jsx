import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import List from './index';

storiesOf('List')
  .addDecorator(checkA11y)
  .add('default', () => (
    <List items={['apples', 'bananas', 'oranges']} />
  ));
