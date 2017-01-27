import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Link from './index';

storiesOf('Link')
  .add('Default', () => (
    <div>
      <Link href={'https://twitter.com'}>Twitter</Link>
      <br />
      <Link href={'https://buffer.com'}>Buffer</Link>
    </div>
  ));
