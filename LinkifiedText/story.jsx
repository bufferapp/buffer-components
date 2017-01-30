import React from 'react';
import { storiesOf } from '@kadira/storybook';
import LinkifiedText from './index';


storiesOf('LinkifiedText')
  .add('default', () => (
    <LinkifiedText
      links={[{
        rawString: 'http://t.co/0JG5Mcq',
        displayString: 'blog.twitter.com/2011/05/twitte…',
        url: 'http://blog.twitter.com/2011/05/twitter-for-mac-update.html',
        indices: [2, 21],
      }]}
    >
      {'a http://t.co/0JG5Mcq b'}
    </LinkifiedText>
  ))
  .add('two links', () => (
    <LinkifiedText
      links={[
        {
          rawString: 'http://t.co/0JG5Mcq',
          displayString: 'blog.twitter.com/2011/05/twitte…',
          url: 'http://blog.twitter.com/2011/05/twitter-for-mac-update.html',
          indices: [2, 21],
        },
        {
          rawString: 'https://buffer.com',
          displayString: 'buffer.com',
          url: 'https://buffer.com',
          indices: [24, 42],
        },
      ]}
    >
      {'a http://t.co/0JG5Mcq b https://buffer.com c'}
    </LinkifiedText>
  ))
  .add('no links', () => (
    <LinkifiedText>{'a b'}</LinkifiedText>
  ))
  .add('empty string', () => (
    <LinkifiedText>{''}</LinkifiedText>
  ));
