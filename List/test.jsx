import React from 'react';
import a11yTestHelper from '../lib/a11yTestHelper';
import List from './index';

describe('List', () => {
  it('should pass accessibility audit', (done) => {
    a11yTestHelper.testComponent(
      <List items={['apples', 'bananas', 'oranges']} />, [], (results) => {
        expect(results.violations.length).toBe(0);
        done();
      });
  });
});
