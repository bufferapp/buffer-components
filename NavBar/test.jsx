import React from 'react';
import { testComponentA11y } from '../lib/a11yTestHelper';
import NavBar from './index';

describe('NavBar', () => {
  it('should pass accessibility audit', (done) => {
    testComponentA11y(
      <NavBar subtitle={'NavBar'} />, [], (results) => {
        expect(results.violations.length).toBe(0);
        done();
      });
  });
});
