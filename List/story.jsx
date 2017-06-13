import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import List from './index';

storiesOf('List')
  .addDecorator(checkA11y)
  .add('default', () => (
    <List items={['apples', 'bananas', 'oranges']} />
  ))
  .add('with ids', () => (
    <List
      items={[
        {
          id: 1,
          component: <code>1</code>,
        },
        {
          id: 2,
          component: <code>2</code>,
        },
      ]}
    />
  ));
