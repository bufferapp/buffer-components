import React from 'react';
import testComponentA11y from '../lib/a11yTestHelper';
import Loader from './index';

describe('Loader', () => {
  it('should pass accessibility audit', () => testComponentA11y(
    <Loader>Some neat loading text!</Loader>,
    )
    // @ts-expect-error TS(2571): Object is of type 'unknown'.
    .then(results => expect(results.violations.length).toBe(0)));
});
