import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Card from './index';

storiesOf('Card')
  .add('Default', () => (
    <Card>A Regular Old Card</Card>
  ))
  .add('Empty', () => (
    <Card empty>An Empty Old Card</Card>
  ))
  .add('No Border', () => (
    <Card noBorder>A Borderless Old Card</Card>
  ));
