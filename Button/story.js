import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Button from './index';

storiesOf('Button')
  .add('Default', () => (
    <Button>Button text</Button>
  ))
  .add('error', () => (
    <Button error>An error button</Button>
  ))
  .add('borderless', () => (
    <Button borderless>Button text</Button>
  ))
  .add('secondary', () => (
    <Button secondary>Button text</Button>
  ))
  .add('inApp', () => (
    <Button inApp>Button text</Button>
  ))
  .add('small', () => (
    <Button small>Button text</Button>
  ))
  .add('tertiary', () => (
    <Button tertiary>Button text</Button>
  ));
