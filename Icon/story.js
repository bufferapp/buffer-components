import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Icon from './index';

storiesOf('Icon')
  .add('Default', () => (
    <Icon
      height={50}
      width={50}
    />
  ))
  .add('buffer', () => (
    <Icon
      height={50}
      width={50}
      type={'buffer'}
    />
  ))
  .add('Large', () => (
    <Icon
      height={100}
      width={100}
    />
  ));
