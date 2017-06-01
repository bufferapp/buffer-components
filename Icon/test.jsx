import React from 'react';
import a11yTestHelper from '../lib/a11yTestHelper';
import ArrowLeftIcon from './Icons/ArrowLeftIcon';

describe('Icon', () => {
  it('should pass accessibility audit', (done) => {
    a11yTestHelper.testComponent(<ArrowLeftIcon />, [], (results) => {
      expect(results.violations.length).toBe(0);
      done();
    });
  });
});
