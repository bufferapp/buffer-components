import React from 'react';
import a11yTestHelper from '../lib/a11yTestHelper';
import LinkStateless from './index';

describe('LinkStateless', () => {
  it('should pass accessibility audit', (done) => {
    a11yTestHelper.testComponent(
      <LinkStateless href={'https://buffer.com'}>Buffer</LinkStateless>, [], (results) => {
        expect(results.violations.length).toBe(0);
        done();
      });
  });
});
