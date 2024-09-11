import React from 'react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-a11y' or its ... Remove this comment to see the full error message
import { withA11y } from '@storybook/addon-a11y';
import IconArrowPopover from './index';
import { QuestionIcon } from '../Icon/Icons';

storiesOf('IconArrowPopover', module)
  .addDecorator(withA11y)
  .add('default', () => (
    // @ts-expect-error TS(2322): Type '{ children: (string | Element)[]; icon: Elem... Remove this comment to see the full error message
    <IconArrowPopover icon={<QuestionIcon />} shadow position="below" oneLine={false} width="320px" label="Posting Schedule">
      {/* eslint-disable max-len */}
      Your posting schedule tells Buffer when to send out posts in your Queue. <br /><br />
      For example, the next 10 posts you add to your Queue will go out in the next 10 upcoming time/date slots you
      decide below. You can change this schedule at any time!
    </IconArrowPopover>
  ));
