import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from '@storybook/addon-a11y';
import Notification from './index';

storiesOf('Notification', module)
  .addDecorator(checkA11y)
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
