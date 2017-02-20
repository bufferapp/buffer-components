import React from 'react';
import { storiesOf } from '@kadira/storybook';
import AddMediaIcon from './Icons/AddMediaIcon';
import AnalyticsIcon from './Icons/AnalyticsIcon';
import ArrowDownIcon from './Icons/ArrowDownIcon';
import ArrowLeftIcon from './Icons/ArrowLeftIcon';
import ArrowLongDownIcon from './Icons/ArrowLongDownIcon';
import ArrowLongLeftIcon from './Icons/ArrowLongLeftIcon';
import ArrowLongRightIcon from './Icons/ArrowLongRightIcon';
import ArrowLongUpIcon from './Icons/ArrowLongUpIcon';
import ArrowRightIcon from './Icons/ArrowRightIcon';
import ArrowSolidDownIcon from './Icons/ArrowSolidDownIcon';

storiesOf('Icon')
  .add('addMediaIcon', () => (
    <AddMediaIcon />
  ))
  .add('analyticsIcon', () => (
    <AnalyticsIcon />
  ))
  .add('arrowDownIcon', () => (
    <ArrowDownIcon />
  ))
  .add('arrowLeftIcon', () => (
    <ArrowLeftIcon />
  ))
  .add('arrowLongDownIcon', () => (
    <ArrowLongDownIcon />
  ))
  .add('arrowLongLeftIcon', () => (
    <ArrowLongLeftIcon />
  ))
  .add('arrowLongRightIcon', () => (
    <ArrowLongRightIcon />
  ))
  .add('arrowLongUpIcon', () => (
    <ArrowLongUpIcon />
  ))
  .add('arrowRightIcon', () => (
    <ArrowRightIcon />
  ))
  .add('arrowSolidDownIcon', () => (
    <ArrowSolidDownIcon />
  ));
