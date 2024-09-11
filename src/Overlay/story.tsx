import React from 'react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-actions' or i... Remove this comment to see the full error message
import { action } from '@storybook/addon-actions';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-a11y' or its ... Remove this comment to see the full error message
import { withA11y } from '@storybook/addon-a11y';
import Overlay from './index';
import Image from '../Image';

storiesOf('Overlay', module)
  .addDecorator(withA11y)
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
