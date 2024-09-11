import React from 'react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-a11y' or its ... Remove this comment to see the full error message
import { withA11y } from '@storybook/addon-a11y';
import LinkifiedText from './index';

storiesOf('LinkifiedText', module)
  .addDecorator(withA11y)
  .add('default', () => (
    <LinkifiedText
      links={[{
        rawString: 'http://t.co/0JG5Mcq',
        displayString: 'blog.twitter.com/2011/05/twitte…',
        // @ts-expect-error TS(2322): Type '{ rawString: string; displayString: string; ... Remove this comment to see the full error message
        url: 'http://blog.twitter.com/2011/05/twitter-for-mac-update.html',
        indices: [2, 21],
      }]}
    >
      a http://t.co/0JG5Mcq b
    </LinkifiedText>
  ))
  .add('empty string', () => (
    <LinkifiedText>{''}</LinkifiedText>
  ))
  .add('no links', () => (
    <LinkifiedText>a b</LinkifiedText>
  ))
  .add('size: small', () => (
    <LinkifiedText
      links={[{
        rawString: 'http://t.co/0JG5Mcq',
        displayString: 'blog.twitter.com/2011/05/twitte…',
        // @ts-expect-error TS(2322): Type '{ rawString: string; displayString: string; ... Remove this comment to see the full error message
        url: 'http://blog.twitter.com/2011/05/twitter-for-mac-update.html',
        indices: [2, 21],
      }]}
      size="small"
    >
      a http://t.co/0JG5Mcq b
    </LinkifiedText>
  ))
  .add('two links', () => (
    <LinkifiedText
      links={[
        {
          rawString: 'http://t.co/0JG5Mcq',
          displayString: 'blog.twitter.com/2011/05/twitte…',
          // @ts-expect-error TS(2322): Type '{ rawString: string; displayString: string; ... Remove this comment to see the full error message
          url: 'http://blog.twitter.com/2011/05/twitter-for-mac-update.html',
          indices: [2, 21],
        },
        {
          rawString: 'https://buffer.com',
          displayString: 'buffer.com',
          // @ts-expect-error TS(2322): Type '{ rawString: string; displayString: string; ... Remove this comment to see the full error message
          url: 'https://buffer.com',
          indices: [24, 42],
        },
      ]}
    >
      a http://t.co/0JG5Mcq b https://buffer.com c
    </LinkifiedText>
  ))
  .add('unstyled', () => (
    <LinkifiedText
      links={[{
        rawString: 'http://t.co/0JG5Mcq',
        displayString: 'blog.twitter.com/2011/05/twitte…',
        // @ts-expect-error TS(2322): Type '{ rawString: string; displayString: string; ... Remove this comment to see the full error message
        url: 'http://blog.twitter.com/2011/05/twitter-for-mac-update.html',
        indices: [2, 21],
      }]}
      unstyled
    >
      a http://t.co/0JG5Mcq b
    </LinkifiedText>
  ))
  .add('newTab', () => (
    <LinkifiedText
      links={[{
        rawString: 'http://t.co/0JG5Mcq',
        displayString: 'blog.twitter.com/2011/05/twitte…',
        // @ts-expect-error TS(2322): Type '{ rawString: string; displayString: string; ... Remove this comment to see the full error message
        url: 'http://blog.twitter.com/2011/05/twitter-for-mac-update.html',
        indices: [2, 21],
      }]}
      newTab
    >
      a http://t.co/0JG5Mcq b
    </LinkifiedText>
  ))
  .add('black text, unstyled link', () => (
    <LinkifiedText
      links={[{
        rawString: 'http://t.co/0JG5Mcq',
        displayString: 'blog.twitter.com/2011/05/twitte…',
        // @ts-expect-error TS(2322): Type '{ rawString: string; displayString: string; ... Remove this comment to see the full error message
        url: 'http://blog.twitter.com/2011/05/twitter-for-mac-update.html',
        indices: [2, 21],
      }]}
      color="black"
      unstyled
    >
      a http://t.co/0JG5Mcq b
    </LinkifiedText>
  ))
  .add('long text with normal whitespace handling', () => (
    <LinkifiedText
      whitespace="normal"
    >
      {'some long text goes here\n\n- item 1\n- item 2\n\nmore text here'}
    </LinkifiedText>
  ))
  .add('long text respecting whitespace ', () => (
    <LinkifiedText
      whitespace="pre-wrap"
    >
      {'some long text goes here\n\n- item 1\n- item 2\n\nmore text here'}
    </LinkifiedText>
  ))
  .add('text with hashtags and mentions', () => (
    <LinkifiedText
      links={
        [
          {
            displayString: '#hashtah',
            indices: [
              22,
              30,
            ],
            rawString: '#hashtah',
            // @ts-expect-error TS(2322): Type '{ displayString: string; indices: number[]; ... Remove this comment to see the full error message
            url: 'https://mastodonbooks.net/tags/hashtah',
            className: 'hashtag',
          },
          {
            displayString: '@buffer',
            indices: [
              45,
              52,
            ],
            rawString: '@buffer',
            // @ts-expect-error TS(2322): Type '{ displayString: string; indices: number[]; ... Remove this comment to see the full error message
            url: 'https://mastodonbooks.net/@buffer',
          },
        ]
      }
      whitespace="pre-wrap"
    >
      This is a text with a #hashtah and a mention @buffer
    </LinkifiedText>
  ))
  .add('text with incorrect links ', () => (
    <LinkifiedText
      links={[{
        rawString: 'http://t.co/0JG5Mcq',
        displayString: 'blog.twitter.com/2011/05/twitte…',
        // @ts-expect-error TS(2322): Type '{ rawString: string; displayString: string; ... Remove this comment to see the full error message
        url: 'http://blog.twitter.com/2011/05/twitter-for-mac-update.html',
        indices: [30, 49],
      }]}
    >
      Text without link
    </LinkifiedText>
  ));
