import React from 'react';
import {
  storiesOf,
// @ts-expect-error TS(2307): Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
} from '@storybook/react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-actions' or i... Remove this comment to see the full error message
import { action } from '@storybook/addon-actions';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-a11y' or its ... Remove this comment to see the full error message
import { withA11y } from '@storybook/addon-a11y';
import Tabs from './index';
import Tab from '../Tab';


storiesOf('Tabs', module)
  .addDecorator(withA11y)
  .add('default', () => (
    <Tabs
      selectedTabId={'tabId'}
      onTabClick={action('tab-click')}
    >
      <Tab tabId={'tabId'}>Tab 1</Tab>
      <Tab tabId={'tabId2'}>Tab 2</Tab>
    </Tabs>
  ));
