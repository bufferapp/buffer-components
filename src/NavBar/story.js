import React from 'react';
import { storiesOf } from '@kadira/storybook';
import NavBar from './index';
import Image from '../Image';

storiesOf('NavBar')
  .add('Default', () => (
    <NavBar>
      <Image
        src={'https://buffer.com/images/app/buffer-logo@2x.png'}
        height={"15px"}
      />
    </NavBar>
  ));
