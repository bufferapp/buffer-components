import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import NavBar from './index';

storiesOf('NavBar')
  .addDecorator(checkA11y)
  .add('Default', () => (
    <NavBar />
  ))
  .add('Subtitle', () => (
    <NavBar subtitle={'NavBar'} />
  ));
