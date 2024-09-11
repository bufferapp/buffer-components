import React from 'react';
import testComponentA11y from '../lib/a11yTestHelper';
import LinkStateless from './index';

describe('LinkStateless', () => {
  it('should pass accessibility audit', () => testComponentA11y(
    <LinkStateless href={'https://buffer.com'}>Buffer</LinkStateless>,
    )
    // @ts-expect-error TS(2571): Object is of type 'unknown'.
    .then(results => expect(results.violations.length).toBe(0)));
});
