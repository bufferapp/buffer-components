import React from 'react';
import a11yTestHelper from '../lib/a11yTestHelper';
import Loader from './index';

describe('Loader', () => {
  it('should pass accessibility audit', (done) => {
    a11yTestHelper.testComponent(
      <Loader>Some neat loading text!</Loader>, [], (results) => {
        expect(results.violations.length).toBe(0);
        done();
      });
  });
});
