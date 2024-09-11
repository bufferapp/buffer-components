import React from 'react';
import testComponentA11y from '../lib/a11yTestHelper';
import NavBar from './index';

describe('NavBar', () => {
  it('should pass accessibility audit', () => testComponentA11y(
    <NavBar subtitle={'NavBar'} />,
    )
    // @ts-expect-error TS(2571): Object is of type 'unknown'.
    .then(results => expect(results.violations.length).toBe(0)));
});
