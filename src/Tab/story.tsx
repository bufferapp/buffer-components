import React from 'react';
import {
  storiesOf,
// @ts-expect-error TS(2307): Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
} from '@storybook/react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-actions' or i... Remove this comment to see the full error message
import { action } from '@storybook/addon-actions';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-a11y' or its ... Remove this comment to see the full error message
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
