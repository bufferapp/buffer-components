import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import Popover from './index';
import Card from '../Card';

storiesOf('Popover')
  .addDecorator(checkA11y)
  .add('default', () => (
    <Popover>
      <Card>Popover</Card>
    </Popover>
  ));
