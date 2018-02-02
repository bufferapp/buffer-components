import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import Button from './index';
import Text from '../Text';

storiesOf('ButtonStateless', module)
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
      <p>Quaternary</p>
      <Button disabled quaternary>Button text</Button><br /><br />
      <p>Warning</p>
      <Button disabled warning>Button text</Button>
      <p>Click Events Should Not Fire</p>
      <Button
        disabled
        onClick={action('button-click--should-not-happen')}
      >
        No Events :(
      </Button>
      <p>No Style</p>
      <Button
        disabled
        onClick={action('button-click--should-not-happen')}
        noStyle
      >
        <Text size="small">Use this as an a11y friendly click target</Text>
      </Button>
    </div>
  ))
  .add('hovered', () => (
    <div>
      <p>Default</p>
      <Button hovered>Button text</Button><br /><br />
      <p>Borderless</p>
      <Button hovered borderless>Button text</Button><br /><br />
      <p>Large</p>
      <Button hovered large>Button text</Button><br /><br />
      <p>Secondary</p>
      <Button hovered secondary>Button text</Button><br /><br />
      <p>Small</p>
      <Button hovered small>Button text</Button><br /><br />
      <p>Tertiary</p>
      <Button hovered tertiary>Button text</Button><br /><br />
      <p>Quaternary</p>
      <Button hovered quaternary>Button text</Button><br /><br />
      <p>Warning</p>
      <Button hovered warning>Button text</Button>
      <p>Disabled</p>
      <Button
        disabled
        hovered
        onClick={action('button-click--should-not-happen')}
      >
        No Events :(
      </Button>
      <p>No Style</p>
      <Button
        noStyle
        hovered
      >
        <Text size="small">Use this as an a11y friendly click target</Text>
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
  .add('quaternary', () => (
    <Button quaternary>Button text</Button>
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
      <Text size="small">Use this as an a11y friendly click target</Text>
    </Button>
  ))
  .add('onMouseEnter + onMouseLeave', () => (
    <Button
      onMouseEnter={action('on-mouse-enter')}
      onMouseLeave={action('on-mouse-leave')}
    >
      Mouse Enter + Mouse Leave
    </Button>
  ))
  .add('focused', () => (
    <Button secondary focused>Focused Button</Button>
  ))
  .add('onFocus + onBlur', () => (
    <Button
      onFocus={action('on-focus')}
      onBlur={action('on-blur')}
    >
      Focus Me!
    </Button>
  ))
  .add('linkStyle', () => (
    <Button linkStyle>LinkStyle Button</Button>
  ));
