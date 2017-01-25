import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Icon from './index';

storiesOf('Icon')
  .add('buffer', () => (
    <Icon
      type={'buffer'}
    />
  ))
  .add('circle-twitter', () => (
    <Icon
      type={'circle-twitter'}
    />
  ))
  .add('small', () => (
    <Icon
      type={'buffer'}
      size={'small'}
    />
  ))
  .add('large', () => (
    <Icon
      type={'buffer'}
      size={'large'}
    />
  ));
