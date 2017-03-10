import React from 'react';
import {
  storiesOf,
  action,
} from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import Button from './index';
import Text from '../Text';

storiesOf('Button')
  .addDecorator(checkA11y)
  .add('Default', () => (
    <Button>Button text</Button>
  ))
  .add('borderless', () => (
    <Button borderless>Button text</Button>
  ))
  .add('disabled', () => (
    <div>
      <p>Default</p>
      <Button disabled>Button text</Button><br /><br />
      <p>Borderless</p>
      <Button disabled borderless>Button text</Button><br /><br />
      <p>Large</p>
      <Button disabled large>Button text</Button><br /><br />
      <p>Secondary</p>
      <Button disabled secondary>Button text</Button><br /><br />
      <p>Small</p>
      <Button disabled small>Button text</Button><br /><br />
      <p>Tertiary</p>
      <Button disabled tertiary>Button text</Button><br /><br />
      <p>Warning</p>
      <Button disabled warning>Button text</Button>
      <p>Click Events Should Not Fire</p>
      <Button
        disabled
        onClick={action('button-click--should-not-happen')}
      >
        No Events :(
      </Button>
    </div>
  ))
  .add('large', () => (
    <Button large>Button text</Button>
  ))
  .add('secondary', () => (
    <Button secondary>Button text</Button>
  ))
  .add('small', () => (
    <Button small>Button text</Button>
  ))
  .add('tertiary', () => (
    <Button tertiary>Button text</Button>
  ))
  .add('warning', () => (
    <Button warning>Button text</Button>
  ))
  .add('fillContainer', () => (
    <div style={{ boxSizing: 'border-box' }}>
      <Button fillContainer>Max WIDTH</Button>
    </div>
  ))
  .add('onClick event', () => (
    <Button
      onClick={action('button-click')}
    >
      Click Me
    </Button>
  ))
  .add('noStyle', () => (
    <Button
      onClick={action('button-click')}
      noStyle
    >
      <Text size={'small'}>Use this as an a11y friendly click target</Text>
    </Button>
  ));
