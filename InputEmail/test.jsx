import React from 'react';
import { testComponentA11y } from '../lib/a11yTestHelper';
import InputEmail from './index';

describe('InputEmail', () => {
  it('should pass accessibility audit', (done) => {
    const onChange = () => false;
    const input = {
      value: 'test@test.com',
      onChange,
    };
    testComponentA11y(
      <InputEmail input={input} label={'Email'} />, [], (results) => {
        expect(results.violations.length).toBe(0);
        done();
      });
  });
});
