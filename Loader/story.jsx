import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import Loader from './index';

storiesOf('Loader', module)
  .addDecorator(withA11y)
  .add('default', () => (
    <Loader />
  ))
  .add('withText', () => (
    <Loader>Some neat loading text!</Loader>
  ));
