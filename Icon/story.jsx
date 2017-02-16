import React from 'react';
import { storiesOf } from '@kadira/storybook';
import AddMedia from './Icons/AddMedia';

storiesOf('Icon')
  .add('addMedia', () => (
    <AddMedia size={'large'} />
  ));
