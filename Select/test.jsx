import React from 'react';
import { testComponentA11y } from '../lib/a11yTestHelper';
import Select from './index';

describe('Select', () => {
  it('should pass accessibility audit', () => {
    const options = [
      'London',
      'New York',
      'San Francisco',
      'Tokyo',
      'Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch', // http://www.fun-with-words.com/longest_place_names.html
    ];
    return testComponentA11y(<Select options={options} />)
    .then(results => expect(results.violations.length).toBe(0));
  });
});
