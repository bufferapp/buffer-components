import React from 'react';
import {
  storiesOf,
} from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import Link from './index';

storiesOf('Link')
  .addDecorator(checkA11y)
  .add('default', () => (
    <Link href={'https://twitter.com'}>Twitter</Link>
  ))
  .add('unstyled', () => (
    <Link href={'https://twitter.com'} unstyled>Twitter</Link>
  ));
