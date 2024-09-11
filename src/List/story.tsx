import React from 'react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-a11y' or its ... Remove this comment to see the full error message
import { withA11y } from '@storybook/addon-a11y';
import List from './index';

storiesOf('List', module)
  .addDecorator(withA11y)
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
