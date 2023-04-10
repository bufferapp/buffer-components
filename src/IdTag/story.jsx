import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import IdTag from './index';

const children = 'GIF';

storiesOf('IdTag', module)
  .addDecorator(withA11y)
  .add('Default', () => (
    <IdTag>{children}</IdTag>
  ));
