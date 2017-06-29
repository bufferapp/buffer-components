import React from 'react';
import { testComponentA11y } from '../lib/a11yTestHelper';
import Select from './index';

describe('Select', () => {
  it('should pass accessibility audit', (done) => {
    const options = [
      'London',
      'New York',
      'San Francisco',
      'Tokyo',
      'Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch', // http://www.fun-with-words.com/longest_place_names.html
    ];
    testComponentA11y(
      <Select options={options} />, [], (results) => {
        expect(results.violations.length).toBe(0);
        done();
      });
  });
});
