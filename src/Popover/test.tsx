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
    // @ts-expect-error TS(2571): Object is of type 'unknown'.
    .then(results => expect(results.violations.length).toBe(0)));
});
