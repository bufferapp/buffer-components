import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Image from './index';

storiesOf('Image')
  .add('Default', () => (
    <Image src={'http://lorempixel.com/400/400/cats/'} />
  ))
  .add('verticalAlignBottom', () => (
    <Image
      src={'http://lorempixel.com/400/400/cats/'}
      verticalAlignBottom
    />
  ))
  .add('W=100%', () => (
    <Image
      src={'http://lorempixel.com/400/400/cats/'}
      width={'100%'}
    />
  ))
  .add('MW=10em', () => (
    <Image
      src={'http://lorempixel.com/400/400/cats/'}
      height={'14em'}
      maxWidth={'10em'}
    />
  ))
  .add('MinW=14em', () => (
    <Image
      src={'http://lorempixel.com/100/100/cats/'}
      minWidth={'14em'}
    />
  ))
  .add('MinH=14em', () => (
    <Image
      src={'http://lorempixel.com/100/100/cats/'}
      minHeight={'14em'}
    />
  ))
  .add('MH=10em', () => (
    <Image
      src={'http://lorempixel.com/400/400/cats/'}
      width={'14em'}
      maxHeight={'10em'}
    />
  ))
  .add('W=40px H=40px', () => (
    <Image
      src={'http://lorempixel.com/400/400/cats/'}
      width={'40px'}
      height={'40px'}
    />
  ))
  .add('W=10em H=10em', () => (
    <Image
      src={'http://lorempixel.com/400/400/cats/'}
      width={'10em'}
      height={'10em'}
    />
  ))
  .add('small image', () => (
    <Image
      src={'http://lorempixel.com/50/50/cats/'}
      width={'10em'}
      maxWidth={'10em'}
      maxHeight={'10em'}
      objectFit={'contain'}
    />
  ))
  .add('wide image', () => (
    <Image
      src={'http://lorempixel.com/1000/400/cats/'}
      width={'10em'}
      height={'10em'}
      maxWidth={'10em'}
      maxHeight={'10em'}
      objectFit={'contain'}
    />
  ))
  .add('tall image', () => (
    <Image
      src={'http://lorempixel.com/400/1000/cats/'}
      width={'10em'}
      height={'10em'}
      maxWidth={'10em'}
      maxHeight={'10em'}
      objectFit={'contain'}
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
