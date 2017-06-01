import React from 'react';
import a11yTestHelper from '../lib/a11yTestHelper';
import MultipleImages from './index';

describe('MultipleImages', () => {
  it('should pass accessibility audit', (done) => {
    a11yTestHelper.testComponent(
      <MultipleImages
        width={'20rem'}
        height={'20rem'}
        urls={[
          'http://lorempixel.com/400/400/cats/',
          'http://lorempixel.com/400/400/cats/',
          'http://lorempixel.com/400/400/cats/',
        ]}
      />, [], (results) => {
        expect(results.violations.length).toBe(0);
        done();
      });
  });
});
