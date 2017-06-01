import React from 'react';
import a11yTestHelper from '../lib/a11yTestHelper';
import NavBar from './index';

describe('NavBar', () => {
  it('should pass accessibility audit', (done) => {
    a11yTestHelper.testComponent(
      <NavBar subtitle={'NavBar'} />, [], (results) => {
        expect(results.violations.length).toBe(0);
        done();
      });
  });
});
