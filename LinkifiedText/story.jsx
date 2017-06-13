import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import LinkifiedText from './index';

storiesOf('LinkifiedText')
  .addDecorator(checkA11y)
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
  .add('empty string', () => (
    <LinkifiedText>{''}</LinkifiedText>
  ))
  .add('no links', () => (
    <LinkifiedText>{'a b'}</LinkifiedText>
  ))
  .add('size: small', () => (
    <LinkifiedText
      links={[{
        rawString: 'http://t.co/0JG5Mcq',
        displayString: 'blog.twitter.com/2011/05/twitte…',
        url: 'http://blog.twitter.com/2011/05/twitter-for-mac-update.html',
        indices: [2, 21],
      }]}
      size={'small'}
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
  .add('unstyled', () => (
    <LinkifiedText
      links={[{
        rawString: 'http://t.co/0JG5Mcq',
        displayString: 'blog.twitter.com/2011/05/twitte…',
        url: 'http://blog.twitter.com/2011/05/twitter-for-mac-update.html',
        indices: [2, 21],
      }]}
      unstyled
    >
      {'a http://t.co/0JG5Mcq b'}
    </LinkifiedText>
  ))
  .add('newTab', () => (
    <LinkifiedText
      links={[{
        rawString: 'http://t.co/0JG5Mcq',
        displayString: 'blog.twitter.com/2011/05/twitte…',
        url: 'http://blog.twitter.com/2011/05/twitter-for-mac-update.html',
        indices: [2, 21],
      }]}
      newTab
    >
      {'a http://t.co/0JG5Mcq b'}
    </LinkifiedText>
  ));
