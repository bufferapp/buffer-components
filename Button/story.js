import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Button from './index';

storiesOf('Button')
  .add('Default', () => (
    <Button>Button text</Button>
  ))
  .add('state=error', () => (
    <Button state="error">Button text</Button>
  ))
  .add('type=borderless', () => (
    <Button type="borderless">Button text</Button>
  ))
  .add('type=secondary', () => (
    <Button type="secondary">Button text</Button>
  ))
  .add('type=in-app', () => (
    <Button type="in-app">Button text</Button>
  ))
  .add('type=small', () => (
    <Button type="small">Button text</Button>
  ))
  .add('type=tertiary', () => (
    <Button type="tertiary">Button text</Button>
  ));
