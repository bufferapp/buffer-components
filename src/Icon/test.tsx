import React from 'react';
import testComponentA11y from '../lib/a11yTestHelper';
import ArrowLeftIcon from './Icons/ArrowLeftIcon';

describe('Icon', () => {
  it('should pass accessibility audit', () => testComponentA11y(
    <ArrowLeftIcon />,
    )
    // @ts-expect-error TS(2571): Object is of type 'unknown'.
    .then(results => expect(results.violations.length).toBe(0)));
});
