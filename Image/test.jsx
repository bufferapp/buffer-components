import React from 'react';
import { testComponentA11y } from '../lib/a11yTestHelper';
import Image from './index';

describe('Image', () => {
  it('should pass accessibility audit', (done) => {
    testComponentA11y(
      <Image
        src={'http://lorempixel.com/400/400/cats/'}
        height={'14em'}
        maxWidth={'10em'}
      />, [], (results) => {
        expect(results.violations.length).toBe(0);
        done();
      });
  });
});
