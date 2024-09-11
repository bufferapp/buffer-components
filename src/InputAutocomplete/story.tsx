import React from 'react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-a11y' or its ... Remove this comment to see the full error message
import { withA11y } from '@storybook/addon-a11y';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-actions' or i... Remove this comment to see the full error message
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
