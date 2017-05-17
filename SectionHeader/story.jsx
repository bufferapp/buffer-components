import React from 'react';
import {
  storiesOf,
} from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import SectionHeader from './index';
import Text from '../Text';

storiesOf('SectionHeader')
  .addDecorator(checkA11y)
  .add('default', () => (
    <SectionHeader>
      <Text color={'outerSpace'}>
        A section header
      </Text>
    </SectionHeader>
  ));
