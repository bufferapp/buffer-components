import React from 'react';
import { storiesOf } from '@kadira/storybook';
import AddMediaIcon from './Icons/AddMediaIcon';
import AnalyticsIcon from './Icons/AnalyticsIcon';
import ArrowDownIcon from './Icons/ArrowDownIcon';
import ArrowLeftIcon from './Icons/ArrowLeftIcon';
import ArrowLongDownIcon from './Icons/ArrowLongDownIcon';
import ArrowLongLeftIcon from './Icons/ArrowLongLeftIcon';
import ArrowLongRightIcon from './Icons/ArrowLongRightIcon';

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
  ))
  .add('arrowLongDown', () => (
    <ArrowLongDownIcon />
  ))
  .add('arrowLongLeft', () => (
    <ArrowLongLeftIcon />
  ))
  .add('arrowLongRight', () => (
    <ArrowLongRightIcon />
  ));
