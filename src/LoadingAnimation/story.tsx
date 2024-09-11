import React from 'react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
import LoadingAnimation from './index';

storiesOf('LoadingAnimation', module)
  .add('default', () => (
    <LoadingAnimation />
  ))
  .add('withMarginTop', () => (
    <LoadingAnimation marginTop={'1rem'} />
  ));
