import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { AddMediaIcon } from './index';
import AnalyticsIcon from './Icons/AnalyticsIcon';

storiesOf('Icon')
  .add('addMedia', () => (
    <AddMediaIcon color={'curious-blue'} size={'large'} />
  ))
  .add('analytics', () => (
    <AnalyticsIcon />
  ));
