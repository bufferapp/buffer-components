import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import IdTag from './index';

const children = 'GIF';

storiesOf('IdTag', module)
  .addDecorator(checkA11y)
  .add('Default', () => (
    <IdTag>{children}</IdTag>
  ));
