import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import InputText from './index';

storiesOf('InputText')
  .addDecorator(checkA11y)
  .add('default', () => (
    <InputText />
  ));
