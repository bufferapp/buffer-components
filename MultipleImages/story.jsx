import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MultipleImages from './index';

storiesOf('MultipleImages')
  .add('Default', () => (
    <MultipleImages
      urls={[
        'http://lorempixel.com/400/400/cats/',
        'http://lorempixel.com/400/400/cats/',
        'http://lorempixel.com/400/400/cats/',
        'http://lorempixel.com/400/400/cats/',
      ]}
    />
  ))
  .add('twoImages', () => (
    <MultipleImages
      urls={[
        'http://lorempixel.com/400/400/cats/',
        'http://lorempixel.com/400/400/cats/',
      ]}
    />
  ))
  .add('threeImages', () => (
    <MultipleImages
      urls={[
        'http://lorempixel.com/400/400/cats/',
        'http://lorempixel.com/400/400/cats/',
        'http://lorempixel.com/400/400/cats/',
      ]}
    />
  ));
