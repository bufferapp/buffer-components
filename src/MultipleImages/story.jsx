import React from 'react';
import { storiesOf } from '@storybook/react';
import MultipleImages from './index';

storiesOf('MultipleImages', module)
  .add('fourImages', () => (
    <MultipleImages
      width="20rem"
      height="20rem"
      urls={[
        'http://lorempixel.com/400/400/cats/',
        'http://lorempixel.com/400/400/cats/',
        'http://lorempixel.com/400/400/cats/',
        'http://lorempixel.com/400/400/cats/',
      ]}
    />
  ))
  .add('threeImages', () => (
    <MultipleImages
      width="20rem"
      height="20rem"
      urls={[
        'http://lorempixel.com/400/400/cats/',
        'http://lorempixel.com/400/400/cats/',
        'http://lorempixel.com/400/400/cats/',
      ]}
    />
  ))
  .add('twoImages', () => (
    <MultipleImages
      width="20rem"
      height="20rem"
      urls={[
        'http://lorempixel.com/400/400/cats/',
        'http://lorempixel.com/400/400/cats/',
      ]}
    />
  ))
  .add('oneImage', () => (
    <MultipleImages
      width="20rem"
      height="20rem"
      urls={[
        'http://lorempixel.com/400/400/cats/',
      ]}
    />
  ))
  .add('width=30rem, height=30rem', () => (
    <MultipleImages
      width="30rem"
      height="30rem"
      urls={[
        'http://lorempixel.com/400/400/cats/',
        'http://lorempixel.com/400/400/cats/',
        'http://lorempixel.com/400/400/cats/',
        'http://lorempixel.com/400/400/cats/',
      ]}
    />
  ))
  .add('border=rounded', () => (
    <MultipleImages
      border="rounded"
      width="20rem"
      height="20rem"
      urls={[
        'http://lorempixel.com/400/400/cats/',
        'http://lorempixel.com/400/400/cats/',
        'http://lorempixel.com/400/400/cats/',
        'http://lorempixel.com/400/400/cats/',
      ]}
    />
  ));
