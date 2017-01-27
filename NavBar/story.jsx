import React from 'react';
import { storiesOf } from '@kadira/storybook';
import NavBar from './index';

storiesOf('NavBar')
  .add('Default', () => (
    <NavBar />
  ))
  .add('Subtitle', () => (
    <NavBar subtitle={'NavBar'} />
  ));
