import React from 'react';
import testComponentA11y from '../lib/a11yTestHelper';
import Card from './index';

describe('Card', () => {
  it('should pass accessibility audit', () => testComponentA11y(
    <Card>
      What is a Product Designer? An awesome story by @jgadapee over on Medium!
    </Card>,
    )
    // @ts-expect-error TS(2571): Object is of type 'unknown'.
    .then(results => expect(results.violations.length).toBe(0)));
});
