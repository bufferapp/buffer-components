import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import IconArrowPopover from './index';
import { QuestionIcon } from '../Icon/Icons';

storiesOf('IconArrowPopover', module)
  .addDecorator(checkA11y)
  .add('default', () => (
    <IconArrowPopover icon={<QuestionIcon />} shadow position="below" oneLine={false} width="320px" label="Posting Schedule">
      {/* eslint-disable max-len */}
      Your posting schedule tells Buffer when to send out posts in your Queue. <br /><br />
      For example, the next 10 posts you add to your Queue will go out in the next 10 upcoming time/date slots you
      decide below. You can change this schedule at any time!
    </IconArrowPopover>
  ));
