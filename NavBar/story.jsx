import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import NavBar from './index';

storiesOf('NavBar', module)
  .addDecorator(withA11y)
  .add('Default', () => (
    <NavBar />
  ))
  .add('Subtitle', () => (
    <NavBar subtitle={'NavBar'} />
  ));
