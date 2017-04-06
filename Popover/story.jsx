import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import Popover from './index';

storiesOf('Popover')
  .addDecorator(checkA11y)
  .add('default', () => (
    <Popover />
  ));
