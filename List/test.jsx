import React from 'react';
import { testComponentA11y } from '../lib/a11yTestHelper';
import List from './index';

describe('List', () => {
  it('should pass accessibility audit', (done) => {
    testComponentA11y(
      <List items={['apples', 'bananas', 'oranges']} />, [], (results) => {
        expect(results.violations.length).toBe(0);
        done();
      });
  });
});
