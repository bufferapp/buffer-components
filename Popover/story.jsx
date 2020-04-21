import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import Popover from './index';
import Card from '../Card';

storiesOf('Popover', module)
  .addDecorator()
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
