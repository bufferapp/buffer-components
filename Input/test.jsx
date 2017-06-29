import React from 'react';
import { testComponentA11y } from '../lib/a11yTestHelper';
import Input from './index';

describe('Input', () => {
  it('should pass accessibility audit', (done) => {
    testComponentA11y(
      <Input
        label={'Username'}
        placeholder={'ex: kitteh1234'}
      />, [], (results) => {
        expect(results.violations.length).toBe(0);
        done();
      });
  });
});
