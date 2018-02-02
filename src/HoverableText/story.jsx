import React from 'react';
import {
  action,
  storiesOf,
} from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import HoverableText from './index';

storiesOf('HoverableText', module)
  .addDecorator(checkA11y)
  .add('default', () => (
    <HoverableText
      onMouseEnter={action('on-mouse-enter')}
      onMouseLeave={action('on-mouse-leave')}
    >
      Hoverable Text!
    </HoverableText>
  ))
  .add('size = small', () => (
    <HoverableText
      onMouseEnter={action('on-mouse-enter')}
      onMouseLeave={action('on-mouse-leave')}
      size={'small'}
    >
      Hoverable Text!
    </HoverableText>
  ))
  .add('color = torchRed', () => (
    <HoverableText
      onMouseEnter={action('on-mouse-enter')}
      onMouseLeave={action('on-mouse-leave')}
      color={'torchRed'}
    >
      Hoverable Text!
    </HoverableText>
  ))
  .add('hovered + hoverColor = curiousBlue', () => (
    <HoverableText
      onMouseEnter={action('on-mouse-enter')}
      onMouseLeave={action('on-mouse-leave')}
      hoverColor={'curiousBlue'}
      hovered
    >
      Hoverable Text!
    </HoverableText>
  ))
  .add('onMouseEnter + onMouseLeave', () => (
    <HoverableText
      onMouseEnter={action('on-mouse-enter')}
      onMouseLeave={action('on-mouse-leave')}
    >
      Hoverable Text!
    </HoverableText>
  ));
