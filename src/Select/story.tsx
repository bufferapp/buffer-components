import React from 'react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-actions' or i... Remove this comment to see the full error message
import { action } from '@storybook/addon-actions';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-a11y' or its ... Remove this comment to see the full error message
import { withA11y } from '@storybook/addon-a11y';
import Select from './index';

const options = [
  { name: 'London', value: 'London' },
  { name: 'New York', value: 'New York' },
  { name: 'San Francisco', value: 'San Francisco' },
  { name: 'Tokyo', value: 'Tokyo' },
  { name: 'Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch', value: 'Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch' }, // http://www.fun-with-words.com/longest_place_names.html
];

storiesOf('Select', module)
  .addDecorator(withA11y)
  .add('default', () => (
    <Select
      options={options}
      onChange={action('on-change')}
    />
  ))
  .add('with value set', () => (
    <Select
      options={options}
      value="Tokyo"
      onChange={action('on-change')}
    />
  ))
  .add('noStyle', () => (
    <Select
      options={options}
      value="Tokyo"
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
      value="Tokyo"
      onChange={action('on-change')}
      color="curiousBlue"
    />
  ))
  .add('small', () => (
    <Select
      options={options}
      onChange={action('on-change')}
      size="small"
    />
  ))
  .add('mini', () => (
    <Select
      options={options}
      onChange={action('on-change')}
      size="mini"
    />
  ));
