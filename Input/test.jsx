import React from 'react';
import a11yTestHelper from '../lib/a11yTestHelper';
import Input from './index';

describe('Input', () => {
  it('should pass accessibility audit', (done) => {
    a11yTestHelper.testComponent(
      <Input
        label={'Username'}
        placeholder={'ex: kitteh1234'}
      />, [], (results) => {
        expect(results.violations.length).toBe(0);
        done();
      });
  });
});
