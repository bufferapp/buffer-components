import React from 'react';
import testComponentA11y from '../lib/a11yTestHelper';
import List from './index';

describe('List', () => {
  it('should pass accessibility audit', () => testComponentA11y(<List items={['apples', 'bananas', 'oranges']} />)
    .then(results => expect(results.violations.length).toBe(0)));
});
