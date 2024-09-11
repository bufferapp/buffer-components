import React from 'react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-a11y' or its ... Remove this comment to see the full error message
import { withA11y } from '@storybook/addon-a11y';
import Divider from './index';

storiesOf('Divider', module)
  .addDecorator(withA11y)
  .add('default', () => (
    <Divider />
  ))
  .add('black divider', () => (
    <Divider color={'black'} />
  ))
  .add('top margin: 5rem', () => (
    <Divider marginTop={'5rem'} />
  ))
  .add('bottom margin: 5rem', () => (
    <div>
      <Divider marginBottom={'5rem'} />
      <div>Next Thing</div>
    </div>
  ));
