import React from 'react';
import testComponentA11y from '../lib/a11yTestHelper';
import LinkifiedText from './index';

describe('LinkifiedText', () => {
  it('should pass accessibility audit', () => testComponentA11y(
    <LinkifiedText
      links={[{
        rawString: 'http://t.co/0JG5Mcq',
        displayString: 'blog.twitter.com/2011/05/twitte…',
        // @ts-expect-error TS(2322): Type '{ rawString: string; displayString: string; ... Remove this comment to see the full error message
        url: 'http://blog.twitter.com/2011/05/twitter-for-mac-update.html',
        indices: [2, 21],
      }]}
    >
      {'a http://t.co/0JG5Mcq b'}
    </LinkifiedText>,
    )
    // @ts-expect-error TS(2571): Object is of type 'unknown'.
    .then(results => expect(results.violations.length).toBe(0)));
});
