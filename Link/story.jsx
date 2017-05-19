import React from 'react';
import {
  storiesOf,
  action,
} from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import Link from './index';

storiesOf('Link')
  .addDecorator(checkA11y)
  .add('default', () => (
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
  ))
  .add('newTab', () => (
    <div>
      <Link href={'https://twitter.com'} newTab>Twitter</Link>
      <br />
      <Link href={'https://buffer.com'} newTab>Buffer</Link>
    </div>
  ))
  .add('hovered', () => (
    <div>
      <Link href={'https://twitter.com'} hovered>Twitter</Link>
      <br />
      <Link href={'https://buffer.com'} hovered>Buffer</Link>
    </div>
  ))
  .add('onMouseEnter + onMouseLeave', () => (
    <div>
      <Link
        href={'https://twitter.com'}
        onMouseEnter={action('on-mouse-enter')}
        onMouseLeave={action('on-mouse-leave')}
      >
        Twitter
      </Link>
      <br />
      <Link
        href={'https://buffer.com'}
        onMouseEnter={action('on-mouse-enter')}
        onMouseLeave={action('on-mouse-leave')}
      >
        Buffer
      </Link>
    </div>
  ))
  .add('focused', () => (
    <Link
      href={'https://twitter.com'}
      focused
    >
      Twitter
    </Link>
  ))
  .add('onFocus + onBlur', () => (
    <Link
      href={'https://twitter.com'}
      onFocus={action('on-focus')}
      onBlur={action('on-blur')}
    >
      Twitter
    </Link>
  ));
