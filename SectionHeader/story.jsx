import React from 'react';
import {
  storiesOf,
} from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import SectionHeader from './index';

storiesOf('SectionHeader')
  .addDecorator(checkA11y)
  .add('default', () => (
    <SectionHeader />
  ))
  .add('with content', () => (
    <SectionHeader>
      A section title
    </SectionHeader>
  ));
