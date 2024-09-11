import React from 'react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-a11y' or its ... Remove this comment to see the full error message
import { withA11y } from '@storybook/addon-a11y';
import SectionHeader from './index';

storiesOf('SectionHeader', module)
  .addDecorator(withA11y)
  .add('default', () => (
    <SectionHeader />
  ))
  .add('with content', () => (
    <SectionHeader>
      A section title
    </SectionHeader>
  ));
