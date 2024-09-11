import React from 'react';
import testComponentA11y from '../lib/a11yTestHelper';
import SectionHeader from './index';

describe('SectionHeader', () => {
  it('should pass accessibility audit', () => testComponentA11y(
    <SectionHeader>
      A section title
    </SectionHeader>,
    )
    // @ts-expect-error TS(2571): Object is of type 'unknown'.
    .then(results => expect(results.violations.length).toBe(0)));
});
