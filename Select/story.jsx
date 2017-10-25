import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import Select from './index';

const options = [
  { name: 'London', value: 'London' },
  { name: 'New York', value: 'New York' },
  { name: 'San Francisco', value: 'San Francisco' },
  { name: 'Tokyo', value: 'Tokyo' },
  { name: 'Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch', value: 'Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch' }, // http://www.fun-with-words.com/longest_place_names.html
];

storiesOf('Select')
  .addDecorator(checkA11y)
  .add('default', () => (
    <Select
      options={options}
      onChange={action('on-change')}
    />
  ))
  .add('with value set', () => (
    <Select
      options={options}
      value={'Tokyo'}
      onChange={action('on-change')}
    />
  ))
  .add('noStyle', () => (
    <Select
      options={options}
      value={'Tokyo'}
      onChange={action('on-change')}
      noStyle
    />
  ))
  .add('short numbers', () => (
    <Select
      options={[{
        name: 1,
        value: 1,
      }, {
        name: 2,
        value: 2,
      }]}
      value={2}
      onChange={action('on-change')}
    />
  ))
  .add('center text', () => (
    <Select
      options={[{
        name: 1,
        value: 1,
      }, {
        name: 2,
        value: 2,
      }]}
      value={2}
      onChange={action('on-change')}
      centerText
      noStyle
    />
  ))
  .add('rangeSelector', () => (
    <Select
      options={[{
        name: 1,
        value: 1,
      }, {
        name: 2,
        value: 2,
      }]}
      value={2}
      onChange={action('on-change')}
      rangeSelector
    />
  ))
  .add('rangeSelector centerText', () => (
    <Select
      options={[{
        name: 1,
        value: 1,
      }, {
        name: 2,
        value: 2,
      }]}
      value={2}
      onChange={action('on-change')}
      centerText
      rangeSelector
    />
  ))
  .add('with text color', () => (
    <Select
      options={options}
      value={'Tokyo'}
      onChange={action('on-change')}
      color={'curiousBlue'}
    />
  ));
