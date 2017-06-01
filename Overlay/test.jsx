import React from 'react';
import a11yTestHelper from '../lib/a11yTestHelper';
import Overlay from './index';
import Image from '../Image/index';

describe('Overlay', () => {
  it('should pass accessibility audit', (done) => {
    a11yTestHelper.testComponent(
      <div style={{ textAlign: 'center' }}>
        <Image src={'http://lorempixel.com/400/400/cats/'} />
        <Overlay transparent />
      </div>, [], (results) => {
        expect(results.violations.length).toBe(0);
        done();
      });
  });
});
