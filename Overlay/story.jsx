import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Overlay from './index';
import Button from '../Button/index';

storiesOf('Overlay')
  .add('default', () => (
    <Overlay>
      <Button>Test</Button>
    </Overlay>
  ));
