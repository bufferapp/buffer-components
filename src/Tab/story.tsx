import React from 'react';
import {
  storiesOf,
} from '@storybook/react';
import { action } from '@storybook/addon-actions';
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
