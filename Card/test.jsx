import React from 'react';
import { testComponentA11y } from '../lib/a11yTestHelper';
import Card from './index';

describe('Card', () => {
  it('should pass accessibility audit', (done) => {
    testComponentA11y(
      <Card>
        What is a Product Designer? An awesome story by @jgadapee over on Medium!
      </Card>, [], (results) => {
        expect(results.violations.length).toBe(0);
        done();
      });
  });
});
