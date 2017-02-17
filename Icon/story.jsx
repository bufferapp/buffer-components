import React from 'react';
import { storiesOf } from '@kadira/storybook';
import AddMediaIcon from './Icons/AddMediaIcon';
import AnalyticsIcon from './Icons/AnalyticsIcon';

storiesOf('Icon')
  .add('addMedia', () => (
    <AddMediaIcon color={'curious-blue'} size={'large'} />
  ))
  .add('analytics', () => (
    <AnalyticsIcon />
  ));
