import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ScheduleTag from './index';

const date = '08:52am (GMC)';

storiesOf('ScheduleTag')
  .add('Default', () => (
    <ScheduleTag dateString={date}></ScheduleTag>
  ))
  