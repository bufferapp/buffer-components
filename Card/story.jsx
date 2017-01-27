import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Card from './index';

storiesOf('Card')
  .add('Default', () => (
    <Card>What is a Product Designer? An awesome story by <a href="#">@jgadapee</a> over on Medium! <a href="#">http://buff.ly/1LTbUqv</a></Card>
  ))
  .add('doublePadding', () => (
    <Card doublePadding>What is a Product Designer? An awesome story by <a href="#">@jgadapee</a> over on Medium! <a href="#">http://buff.ly/1LTbUqv</a></Card>
  ))
  .add('empty', () => (
    <Card empty>Nothing to see here! 👻</Card>
  ))
  .add('failed', () => (
    <Card failed>What is a Product Designer? An awesome story by <a href="#">@jgadapee</a> over on Medium! <a href="#">http://buff.ly/1LTbUqv</a></Card>
  ))
  .add('noBorder', () => (
    <Card noBorder>What is a Product Designer? An awesome story by <a href="#">@jgadapee</a> over on Medium! <a href="#">http://buff.ly/1LTbUqv</a></Card>
  ))
  .add('noPadding', () => (
    <Card noPadding>What is a Product Designer? An awesome story by <a href="#">@jgadapee</a> over on Medium! <a href="#">http://buff.ly/1LTbUqv</a></Card>
  ));
