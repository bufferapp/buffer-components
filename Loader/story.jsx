import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import Loader from './index';

storiesOf('Loader')
  .addDecorator(checkA11y)
  .add('default', () => (
    <Loader />
  ))
  .add('withText', () => (
    <Loader>Some neat loading text!</Loader>
  ));
