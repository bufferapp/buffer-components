import React from 'react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-actions' or i... Remove this comment to see the full error message
import { action } from '@storybook/addon-actions';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-a11y' or its ... Remove this comment to see the full error message
import { withA11y } from '@storybook/addon-a11y';
import Input from './index';

storiesOf('Input', module)
  .addDecorator(withA11y)
  .add('default', () => <Input />)
  // @ts-expect-error TS(2322): Type '{ onFocus: any; }' is not assignable to type... Remove this comment to see the full error message
  .add('with custom onFocus handler', () => <Input onFocus={action('onFocus')} />)
  // @ts-expect-error TS(2322): Type '{ type: string; }' is not assignable to type... Remove this comment to see the full error message
  .add('type=textarea', () => <Input type="textarea" />);
