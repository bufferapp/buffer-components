import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import ArrowPopover from './index';
import Text from '../Text';

storiesOf('ArrowPopover', module)
.addDecorator(checkA11y)
.add('default tooltip', () => (
  <div style={{ display: 'inline-block', margin: '5rem', position: 'relative', overflow: 'visible' }}>
    <Text>I have a Popover tooltip!</Text>
    <ArrowPopover visible shadow>
      This is a simple tooltip style Popover!
    </ArrowPopover>
  </div>
))
.add('larger popover: below', () => (
  <div style={{ display: 'inline-block', margin: '5rem', position: 'relative', overflow: 'visible' }}>
    <Text>I have a Popover!</Text>
    <ArrowPopover visible oneLine={false} width="300px" position="below">
      <div style={{ padding: '.5rem .25rem' }}>
        Your posting schedule tells Buffer when to send out posts in your Queue (under the Content tab).<br /><br />
        For example, the next 10 posts you add to your Queue will go out in the next 10 upcoming time/date slots you decide below. <br /><br />
        You can change this schedule at any time!
      </div>
    </ArrowPopover>
  </div>
))
.add('larger popover: above', () => (
  <div style={{ display: 'inline-block', margin: '5rem', position: 'relative', overflow: 'visible' }}>
    <Text>I have a Popover!</Text>
    <ArrowPopover visible position="above" shadow>
      <div style={{ padding: ' .5rem .25rem' }}>
        Look at me!<br />
        I'm so far above the rest! ✈️<br />
        Later! ✌️
      </div>
    </ArrowPopover>
  </div>
));
