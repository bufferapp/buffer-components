import React from 'react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
import MultipleImages from './index';

storiesOf('MultipleImages', module)
  .add('fourImages', () => (
    <MultipleImages
      width={'20rem'}
      height={'20rem'}
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
      width={'20rem'}
      height={'20rem'}
      urls={[
        'http://lorempixel.com/400/400/cats/',
        'http://lorempixel.com/400/400/cats/',
        'http://lorempixel.com/400/400/cats/',
      ]}
    />
  ))
  .add('twoImages', () => (
    <MultipleImages
      width={'20rem'}
      height={'20rem'}
      urls={[
        'http://lorempixel.com/400/400/cats/',
        'http://lorempixel.com/400/400/cats/',
      ]}
    />
  ))
  .add('oneImage', () => (
    <MultipleImages
      width={'20rem'}
      height={'20rem'}
      urls={[
        'http://lorempixel.com/400/400/cats/',
      ]}
    />
  ))
  .add('width=30rem, height=30rem', () => (
    <MultipleImages
      width={'30rem'}
      height={'30rem'}
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
      border={'rounded'}
      width={'20rem'}
      height={'20rem'}
      urls={[
        'http://lorempixel.com/400/400/cats/',
        'http://lorempixel.com/400/400/cats/',
        'http://lorempixel.com/400/400/cats/',
        'http://lorempixel.com/400/400/cats/',
      ]}
    />
  ));
