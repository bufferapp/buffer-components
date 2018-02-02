/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import Link from './index';

storiesOf('Link', module)
  .addDecorator(checkA11y)
  .add('default', () => (
    <Link href="https://twitter.com">Twitter</Link>
  ))
  .add('unstyled', () => (
    <Link href="https://twitter.com" unstyled>Twitter</Link>
  ))
  .add('onClick', () => (
    <Link href="#" onClick={action('on-click')} unstyled>Twitter</Link>
  ));
