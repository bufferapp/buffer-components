import React from 'react';
import testComponentA11y from '../lib/a11yTestHelper';
import IdTag from './index';

describe('IdTag', () => {
  it('should pass accessibility audit', () => {
    const children = 'GIF';
    return testComponentA11y(
      <IdTag>
        {children}
      </IdTag>,
      )
      // @ts-expect-error TS(2571): Object is of type 'unknown'.
      .then(results => expect(results.violations.length).toBe(0));
  });
});
