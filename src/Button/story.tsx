import React from 'react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-actions' or i... Remove this comment to see the full error message
import { action } from '@storybook/addon-actions';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-a11y' or its ... Remove this comment to see the full error message
import { withA11y } from '@storybook/addon-a11y';
import Button from './index';
import CloseIcon from '../Icon/Icons/CloseIcon';
import Text from '../Text';

storiesOf('Button', module)
  .addDecorator(withA11y)
  .add('default', () => (
    // @ts-expect-error TS(2322): Type '{ children: string; onClick: any; }' is not ... Remove this comment to see the full error message
    <Button onClick={action('on-click')}>Click Me</Button>
  ))
  .add('warning button', () => (
    // @ts-expect-error TS(2322): Type '{ children: string; onClick: any; warning: t... Remove this comment to see the full error message
    <Button onClick={action('on-click')} warning>Warning</Button>
  ))
  .add('with icon and text', () => (
    // @ts-expect-error TS(2322): Type '{ children: Element[]; onClick: any; noStyle... Remove this comment to see the full error message
    <Button onClick={action('on-click')} noStyle>
      <CloseIcon />
      <Text>Close</Text>
    </Button>
  ))
  .add('with icon only', () => (
    // @ts-expect-error TS(2322): Type '{ children: Element; onClick: any; noStyle: ... Remove this comment to see the full error message
    <Button onClick={action('on-click')} noStyle><CloseIcon /></Button>
  ));
