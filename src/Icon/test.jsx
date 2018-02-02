import React from 'react';
import testComponentA11y from '../lib/a11yTestHelper';
import ArrowLeftIcon from './Icons/ArrowLeftIcon';

describe('Icon', () => {
  it('should pass accessibility audit', () => testComponentA11y(<ArrowLeftIcon />)
    .then(results => expect(results.violations.length).toBe(0)));
});
