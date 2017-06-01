import React from 'react';
import a11yTestHelper from '../lib/a11yTestHelper';
import IdTag from './index';

describe('IdTag', () => {
  it('should pass accessibility audit', (done) => {
    const children = 'GIF';
    a11yTestHelper.testComponent(
      <IdTag>
        {children}
      </IdTag>, [], (results) => {
        expect(results.violations.length).toBe(0);
        done();
      });
  });
});
