import React from 'react';
import { testComponentA11y } from '../lib/a11yTestHelper';
import Popover from './index';
import Card from '../Card/index';

describe('Popover', () => {
  it('should pass accessibility audit', (done) => {
    testComponentA11y(
      <Popover>
        <Card>Popover</Card>
      </Popover>, [], (results) => {
        expect(results.violations.length).toBe(0);
        done();
      });
  });
});
