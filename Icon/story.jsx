import React from 'react';
import { storiesOf } from '@kadira/storybook';
import AddMediaIcon from './Icons/AddMediaIcon';
import AnalyticsIcon from './Icons/AnalyticsIcon';
import ArrowDownIcon from './Icons/ArrowDownIcon';
import ArrowLeftIcon from './Icons/ArrowLeftIcon';

storiesOf('Icon')
  .add('addMedia', () => (
    <AddMediaIcon />
  ))
  .add('analytics', () => (
    <AnalyticsIcon />
  ))
  .add('arrowDown', () => (
    <ArrowDownIcon />
  ))
  .add('arrowLeft', () => (
    <ArrowLeftIcon />
  ));
