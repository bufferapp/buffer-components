import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Card from './index';
import Link from '../Link';

storiesOf('Card')
  .add('Default', () => (
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
  .add('noBorder', () => (
    <Card noBorder>What is a Product Designer? An awesome story by <Link href={'#'}>@jgadapee</Link> over on Medium! <Link href={'#'}>http://buff.ly/1LTbUqv</Link></Card>
  ))
  .add('noPadding', () => (
    <Card noPadding>What is a Product Designer? An awesome story by <Link href={'#'}>@jgadapee</Link> over on Medium! <Link href={'#'}>http://buff.ly/1LTbUqv</Link></Card>
  ));
