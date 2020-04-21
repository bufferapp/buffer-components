import React from 'react';
import {
  storiesOf,
  action,
} from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import Tab from './index';

storiesOf('Tab', module)
  .addDecorator(withA11y)
  .add('default', () => (
    <Tab
      tabId={'tabId'}
      onClick={action('tab-click')}
    >
      Tab
    </Tab>
  ))
  .add('selected', () => (
    <Tab
      tabId={'selectedTabId'}
      onClick={action('tab-click')}
      selected
    >
      Tab
    </Tab>
  ));
