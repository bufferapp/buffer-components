import React from 'react';
import { testComponentA11y } from '../lib/a11yTestHelper';
import IdTag from './index';

describe('IdTag', () => {
  it('should pass accessibility audit', (done) => {
    const children = 'GIF';
    testComponentA11y(
      <IdTag>
        {children}
      </IdTag>, [], (results) => {
        expect(results.violations.length).toBe(0);
        done();
      });
  });
});
