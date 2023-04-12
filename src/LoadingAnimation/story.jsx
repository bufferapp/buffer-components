import React from 'react';
import { storiesOf } from '@storybook/react';
import LoadingAnimation from './index';

storiesOf('LoadingAnimation', module)
  .add('default', () => (
    <LoadingAnimation />
  ))
  .add('withMarginTop', () => (
    <LoadingAnimation marginTop={'1rem'} />
  ));
