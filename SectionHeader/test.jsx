import React from 'react';
import a11yTestHelper from '../lib/a11yTestHelper';
import SectionHeader from './index';

describe('SectionHeader', () => {
  it('should pass accessibility audit', (done) => {
    a11yTestHelper.testComponent(
      <SectionHeader>
        A section title
      </SectionHeader>, [], (results) => {
        expect(results.violations.length).toBe(0);
        done();
      });
  });
});
