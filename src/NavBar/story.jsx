import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import NavBar from './index';

storiesOf('NavBar', module)
  .addDecorator(checkA11y)
  .add('Default', () => (
    <NavBar />
  ))
  .add('Subtitle', () => (
    <NavBar subtitle="NavBar" />
  ));
