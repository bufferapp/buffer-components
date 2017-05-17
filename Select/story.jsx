import React from 'react';
import {
  storiesOf,
} from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import Select from './index';

storiesOf('Select')
  .addDecorator(checkA11y)
  .add('default', () => (
    <Select />
  ));
