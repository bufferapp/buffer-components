import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import Caption from './index'

storiesOf('InputDate Caption', module)
  .addDecorator(checkA11y)
  .add('default', () => (
    <Caption />
  ));
