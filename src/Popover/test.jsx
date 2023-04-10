import React from 'react';
import testComponentA11y from '../lib/a11yTestHelper';
import Popover from './index';
import Card from '../Card';

describe('Popover', () => {
  it('should pass accessibility audit', () => testComponentA11y(
    <Popover>
      <Card>Popover</Card>
    </Popover>,
    )
    .then(results => expect(results.violations.length).toBe(0)));
});
