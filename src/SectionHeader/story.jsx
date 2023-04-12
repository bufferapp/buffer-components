import React from 'react';
import { storiesOf } from '@storybook/react';
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
