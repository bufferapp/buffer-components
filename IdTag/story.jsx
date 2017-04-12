import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import IdTag from './index';

const children = 'GIF';

storiesOf('IdTag')
  .addDecorator(checkA11y)
  .add('Default', () => (
    <IdTag>{children}</IdTag>
  ));
