import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import InputAutocomplete from './index';
import { sortItems, getTimezones } from './utils';

storiesOf('InputAutocomplete', module)
  .addDecorator(withA11y)
  .add('default', () => (
    <InputAutocomplete
      input={{
        onChange: action('on-change'),
        value: '',
      }}
      items={getTimezones()}
      onSelect={action('select-item')}
      sortItems={sortItems}
      onFocusHandler={action('onFocusHandler')}
      onBlurHandler={action('onBlurHandler')}
    />
  ))
  .add('empty items', () => (
    <InputAutocomplete
      input={{
        onChange: action('on-change'),
        value: '',
      }}
      items={[]}
      onSelect={action('select-item')}
      sortItems={sortItems}
      onFocusHandler={action('onFocusHandler')}
      onBlurHandler={action('onBlurHandler')}
    />
  ))
  .add('disabled', () => (
    <InputAutocomplete
      input={{
        onChange: action('on-change'),
        value: '',
      }}
      disabled
      items={[]}
      onSelect={action('select-item')}
      sortItems={sortItems}
      onFocusHandler={action('onFocusHandler')}
      onBlurHandler={action('onBlurHandler')}
    />
  ));
