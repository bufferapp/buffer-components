import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import LinkStateless from './index';

storiesOf('LinkStateless')
  .addDecorator(checkA11y)
  .add('default', () => (
    <div>
      <LinkStateless href={'https://twitter.com'}>Twitter</LinkStateless>
      <br />
      <LinkStateless href={'https://buffer.com'}>Buffer</LinkStateless>
    </div>
  ))
  .add('unstyled', () => (
    <div>
      <LinkStateless href={'https://twitter.com'} unstyled>Twitter</LinkStateless>
      <br />
      <LinkStateless href={'https://buffer.com'} unstyled>Buffer</LinkStateless>
    </div>
  ))
  .add('newTab', () => (
    <div>
      <LinkStateless href={'https://twitter.com'} newTab>Twitter</LinkStateless>
      <br />
      <LinkStateless href={'https://buffer.com'} newTab>Buffer</LinkStateless>
    </div>
  ))
  .add('hovered', () => (
    <div>
      <LinkStateless href={'https://twitter.com'} hovered>Twitter</LinkStateless>
      <br />
      <LinkStateless href={'https://buffer.com'} hovered>Buffer</LinkStateless>
    </div>
  ))
  .add('onMouseEnter + onMouseLeave', () => (
    <div>
      <LinkStateless
        href={'https://twitter.com'}
        onMouseEnter={action('on-mouse-enter')}
        onMouseLeave={action('on-mouse-leave')}
      >
        Twitter
      </LinkStateless>
      <br />
      <LinkStateless
        href={'https://buffer.com'}
        onMouseEnter={action('on-mouse-enter')}
        onMouseLeave={action('on-mouse-leave')}
      >
        Buffer
      </LinkStateless>
    </div>
  ))
  .add('focused', () => (
    <LinkStateless
      href={'https://twitter.com'}
      focused
    >
      Twitter
    </LinkStateless>
  ))
  .add('onFocus + onBlur', () => (
    <LinkStateless
      href={'https://twitter.com'}
      onFocus={action('on-focus')}
      onBlur={action('on-blur')}
    >
      Twitter
    </LinkStateless>
  ))
  .add('onClick', () => (
    <LinkStateless
      onClick={action('on-click')}
    >
      Twitter
    </LinkStateless>
  ));
