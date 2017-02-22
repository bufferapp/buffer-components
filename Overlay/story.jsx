import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Overlay from './index';
import Image from '../Image';

storiesOf('Overlay')
  .add('default', () => (
    <div style={{ textAlign: 'center' }}>
      <Image src={'http://lorempixel.com/400/400/cats/'} />
      <Overlay onClick={action('overlay-click')} />
    </div>
  ));
