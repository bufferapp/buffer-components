import React from 'react';
import {
  storiesOf,
// @ts-expect-error TS(2307): Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
} from '@storybook/react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-actions' or i... Remove this comment to see the full error message
import { action } from '@storybook/addon-actions';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-a11y' or its ... Remove this comment to see the full error message
import { withA11y } from '@storybook/addon-a11y';
import HoverableText from './index';

storiesOf('HoverableText', module)
  .addDecorator(withA11y)
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
