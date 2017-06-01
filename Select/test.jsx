import React from 'react';
import a11yTestHelper from '../lib/a11yTestHelper';
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
    a11yTestHelper.testComponent(
      <Select options={options} />, [], (results) => {
        expect(results.violations.length).toBe(0);
        done();
      });
  });
});
