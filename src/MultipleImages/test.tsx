import React from 'react';
import testComponentA11y from '../lib/a11yTestHelper';
import MultipleImages from './index';

describe('MultipleImages', () => {
  it('should pass accessibility audit', () => testComponentA11y(
    <MultipleImages
      width={'20rem'}
      height={'20rem'}
      urls={[
        'http://lorempixel.com/400/400/cats/',
        'http://lorempixel.com/400/400/cats/',
        'http://lorempixel.com/400/400/cats/',
      ]}
    />,
    )
    .then(results => expect(results.violations.length).toBe(0)));
});
