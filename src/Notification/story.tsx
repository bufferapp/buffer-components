import React from 'react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-actions' or i... Remove this comment to see the full error message
import { action } from '@storybook/addon-actions';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-a11y' or its ... Remove this comment to see the full error message
import { withA11y } from '@storybook/addon-a11y';
import Notification from './index';

storiesOf('Notification', module)
  .addDecorator(withA11y)
  .add('default', () => (
    <Notification
      onCloseClick={action('on-close-click')}
    >
      {"Awesome! You've got a notification!"}
    </Notification>
  ))
  .add('long text', () => (
    <Notification
      onCloseClick={action('on-close-click')}
    >
      {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
    </Notification>
  ))
  .add('handle close click', () => (
    <Notification
      onCloseClick={action('on-close-click')}
    >
      {'Click the close button'}
    </Notification>
  ))
  .add('error', () => (
    <Notification
      type={'error'}
      onCloseClick={action('on-close-click')}
    >
      {'Oh No! There was an error doing the thing!'}
    </Notification>
  ));
