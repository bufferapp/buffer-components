import React from 'react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-actions' or i... Remove this comment to see the full error message
import { action } from '@storybook/addon-actions';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-a11y' or its ... Remove this comment to see the full error message
import { withA11y } from '@storybook/addon-a11y';
import Popover from './index';
import Card from '../Card';

storiesOf('Popover', module)
  .addDecorator(withA11y)
  .add('default', () => (
    <Popover onOverlayClick={action('overlay-click')}>
      <Card>Popover</Card>
    </Popover>
  ))
  .add('left = 10rem', () => (
    <Popover
      onOverlayClick={action('overlay-click')}
      left={'10rem'}
    >
      <Card>Popover</Card>
    </Popover>
  ))
  .add('top = 10rem', () => (
    <Popover
      onOverlayClick={action('overlay-click')}
      top={'10rem'}
    >
      <Card>Popover</Card>
    </Popover>
  ))
  .add('top = 10rem left = 10rem', () => (
    <Popover
      onOverlayClick={action('overlay-click')}
      top={'10rem'}
      left={'10rem'}
    >
      <Card>Popover</Card>
    </Popover>
  ))
  .add('transparent Overlay', () => (
    <Popover
      onOverlayClick={action('overlay-click')}
      transparentOverlay
    >
      <Card>Popover</Card>
    </Popover>
  ))
  .add('right = 10rem', () => (
    <Popover
      onOverlayClick={action('overlay-click')}
      right={'10rem'}
    >
      <Card>Popover</Card>
    </Popover>
  ))
  .add('bottom = 10rem', () => (
    <Popover
      onOverlayClick={action('overlay-click')}
      bottom={'10rem'}
    >
      <Card>Popover</Card>
    </Popover>
  ))
  .add('bottom = 10rem right = 10rem', () => (
    <Popover
      onOverlayClick={action('overlay-click')}
      bottom={'10rem'}
      right={'10rem'}
    >
      <Card>Popover</Card>
    </Popover>
  ));
