import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Loader from './index';

storiesOf('Loader')
  .add('Default', () => (
    <Loader>Some neat loading text!</Loader>
  ));
