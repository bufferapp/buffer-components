import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import Link from './index';

storiesOf('Link')
  .addDecorator(checkA11y)
  .add('Default', () => (
    <div>
      <Link href={'https://twitter.com'}>Twitter</Link>
      <br />
      <Link href={'https://buffer.com'}>Buffer</Link>
    </div>
  ))
  .add('unstyled', () => (
    <div>
      <Link href={'https://twitter.com'} unstyled>Twitter</Link>
      <br />
      <Link href={'https://buffer.com'} unstyled>Buffer</Link>
    </div>
  ));
