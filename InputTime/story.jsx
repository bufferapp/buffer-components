import React from 'react';
import {
  storiesOf,
} from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import InputTime from './index';


storiesOf('InputTime')
  .addDecorator(checkA11y)
  .add('default', () => (
    <InputTime />
  ));
