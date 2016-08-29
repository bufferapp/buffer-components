import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Image from './index';

storiesOf('Image')
  .add('Default', () => (
    <Image src={'https://buffer.com/images/app/buffer-logo@2x.png'} />
  ))
  .add('W=100%', () => (
    <Image
      src={'https://buffer.com/images/app/buffer-logo@2x.png'}
      width={"100%"}
    />
  ))
  .add('W=200px H=40px', () => (
    <Image
      src={'https://buffer.com/images/app/buffer-logo@2x.png'}
      width={"200px"}
      height={"40px"}
    />
  ));
