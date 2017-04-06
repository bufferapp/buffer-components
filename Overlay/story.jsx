import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import Overlay from './index';
import Image from '../Image';

storiesOf('Overlay')
  .addDecorator(checkA11y)
  .add('default', () => (
    <div style={{ textAlign: 'center' }}>
      <Image src={'http://lorempixel.com/400/400/cats/'} />
      <Overlay onClick={action('overlay-click')} />
    </div>
  ))
  .add('transparent=true', () => (
    <div style={{ textAlign: 'center' }}>
      <Image src={'http://lorempixel.com/400/400/cats/'} />
      <Overlay onClick={action('overlay-click')} transparent />
    </div>
  ));
