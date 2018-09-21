import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import Caption from './index';
import moment from 'moment';

const date = moment('2015-07-01').toDate();

storiesOf('InputDate Caption', module)
  .addDecorator(checkA11y)
  .add('default', () => (
    <Caption date={date}/>
  ));
