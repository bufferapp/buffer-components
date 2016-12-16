import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Card from './index';

storiesOf('Card')
  .add('Default', () => (
    <Card>A Regular Old Card</Card>
  ))
  .add('doublePadding', () => (
    <Card doublePadding>A Card With Extra Padding</Card>
  ))
  .add('empty', () => (
    <Card empty>An Empty Old Card</Card>
  ))
  .add('noBorder', () => (
    <Card noBorder>A Borderless Old Card</Card>
  ))
  .add('noPadding', () => (
    <Card noPadding>A Card With No Padding</Card>
  ));
