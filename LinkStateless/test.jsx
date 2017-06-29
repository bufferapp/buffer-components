import React from 'react';
import { testComponentA11y } from '../lib/a11yTestHelper';
import LinkStateless from './index';

describe('LinkStateless', () => {
  it('should pass accessibility audit', (done) => {
    testComponentA11y(
      <LinkStateless href={'https://buffer.com'}>Buffer</LinkStateless>, [], (results) => {
        expect(results.violations.length).toBe(0);
        done();
      });
  });
});
