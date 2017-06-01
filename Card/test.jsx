import React from 'react';
import a11yTestHelper from '../lib/a11yTestHelper';
import Card from './index';

describe('Card', () => {
  it('should pass accessibility audit', (done) => {
    a11yTestHelper.testComponent(
      <Card>
        What is a Product Designer? An awesome story by @jgadapee over on Medium!
      </Card>, [], (results) => {
        expect(results.violations.length).toBe(0);
        done();
      });
  });
});
