import React from 'react';
import {
  storiesOf,
  action,
} from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import Card from './index';
import Link from '../Link';

storiesOf('Card')
  .addDecorator(checkA11y)
  .add('default', () => (
    <Card>What is a Product Designer? An awesome story by <Link href={'#'}>@jgadapee</Link> over on Medium! <Link href={'#'}>http://buff.ly/1LTbUqv</Link></Card>
  ))
  .add('doublePadding', () => (
    <Card doublePadding>What is a Product Designer? An awesome story by <Link href={'#'}>@jgadapee</Link> over on Medium! <Link href={'#'}>http://buff.ly/1LTbUqv</Link></Card>
  ))
  .add('empty', () => (
    <Card empty>Nothing to see here! 👻</Card>
  ))
  .add('failed', () => (
    <Card failed>What is a Product Designer? An awesome story by <Link href={'#'}>@jgadapee</Link> over on Medium! <Link href={'#'}>http://buff.ly/1LTbUqv</Link></Card>
  ))
  .add('faded', () => (
    <Card faded>What is a Product Designer? An awesome story by <Link href={'#'}>@jgadapee</Link> over on Medium! <Link href={'#'}>http://buff.ly/1LTbUqv</Link></Card>
  ))
  .add('noBorder', () => (
    <Card noBorder>What is a Product Designer? An awesome story by <Link href={'#'}>@jgadapee</Link> over on Medium! <Link href={'#'}>http://buff.ly/1LTbUqv</Link></Card>
  ))
  .add('noPadding', () => (
    <Card noPadding>What is a Product Designer? An awesome story by <Link href={'#'}>@jgadapee</Link> over on Medium! <Link href={'#'}>http://buff.ly/1LTbUqv</Link></Card>
  ))
  .add('hovered', () => (
    <Card hovered>What is a Product Designer? An awesome story by <Link href={'#'}>@jgadapee</Link> over on Medium! <Link href={'#'}>http://buff.ly/1LTbUqv</Link></Card>
  ))
  .add('empty + hovered', () => (
    <Card empty hovered>What is a Product Designer? An awesome story by <Link href={'#'}>@jgadapee</Link> over on Medium! <Link href={'#'}>http://buff.ly/1LTbUqv</Link></Card>
  ))
  .add('onMouseEnter + onMouseLeave', () => (
    <Card
      onMouseEnter={action('on-mouse-enter')}
      onMouseLeave={action('on-mouse-leave')}
    >
      What is a Product Designer? An awesome story by <Link href={'#'}>@jgadapee</Link> over on Medium! <Link href={'#'}>http://buff.ly/1LTbUqv</Link>
    </Card>
  ))
  .add('off-white background color', () => (
    <Card color={'off-white'}>What is a Product Designer? An awesome story by <Link href={'#'}>@jgadapee</Link> over on Medium! <Link href={'#'}>http://buff.ly/1LTbUqv</Link></Card>
  ));
