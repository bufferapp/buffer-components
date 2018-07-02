import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import Input from './index';

storiesOf('Input', module)
  .addDecorator(checkA11y)
  .add('default', () => <Input />)
  .add('type=textarea', () => <Input type="textarea" />);
