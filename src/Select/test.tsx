import React from 'react';
import testComponentA11y from '../lib/a11yTestHelper';
import Select from './index';

describe('Select', () => {
  it('should pass accessibility audit', () => {
    const options = [
      { name: 'London', value: 'London' },
      { name: 'New York', value: 'New York' },
      { name: 'San Francisco', value: 'San Francisco' },
      { name: 'Tokyo', value: 'Tokyo' },
      { name: 'Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch', value: 'Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch' }, // http://www.fun-with-words.com/longest_place_names.html
    ];
    return testComponentA11y(<Select options={options} />)
    // @ts-expect-error TS(2571): Object is of type 'unknown'.
    .then(results => expect(results.violations.length).toBe(0));
  });
});
