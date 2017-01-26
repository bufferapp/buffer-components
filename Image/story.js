import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Image from './index';

storiesOf('Image')
  .add('Default', () => (
    <Image src={'http://lorempixel.com/400/400/cats/'} />
  ))
  .add('W=100%', () => (
    <Image
      src={'http://lorempixel.com/400/400/cats/'}
      width={"100%"}
    />
  ))
  .add('W=40px H=40px', () => (
    <Image
      src={'http://lorempixel.com/400/400/cats/'}
      width={"40px"}
      height={"40px"}
    />
  ))
  .add('border: circle', () => (
    <Image
      src={'http://lorempixel.com/400/400/cats/'}
      border={'circle'}
    />
  ))
  .add('border: rounded', () => (
    <Image
      src={'http://lorempixel.com/400/400/cats/'}
      border={'rounded'}
    />
  ));
