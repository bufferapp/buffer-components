import React from 'react';
import a11yTestHelper from '../lib/a11yTestHelper';
import InputEmail from './index';

describe('InputEmail', () => {
  it('should pass accessibility audit', (done) => {
    const onChange = () => false;
    const input = {
      value: 'test@test.com',
      onChange,
    };
    a11yTestHelper.testComponent(
      <InputEmail input={input} label={'Email'} />, [], (results) => {
        expect(results.violations.length).toBe(0);
        done();
      });
  });
});
