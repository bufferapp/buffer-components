import React from 'react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-actions' or i... Remove this comment to see the full error message
import { action } from '@storybook/addon-actions';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-a11y' or its ... Remove this comment to see the full error message
import { withA11y } from '@storybook/addon-a11y';
import Link from './index';

storiesOf('Link', module)
  .addDecorator(withA11y)
  .add('default', () => (
    // @ts-expect-error TS(2322): Type '{ children: string; href: string; }' is not ... Remove this comment to see the full error message
    <Link href={'https://twitter.com'}>Twitter</Link>
  ))
  .add('unstyled', () => (
    // @ts-expect-error TS(2322): Type '{ children: string; href: string; unstyled: ... Remove this comment to see the full error message
    <Link href={'https://twitter.com'} unstyled>Twitter</Link>
  ))
  .add('onClick', () => (
    // @ts-expect-error TS(2322): Type '{ children: string; href: string; onClick: a... Remove this comment to see the full error message
    <Link href={'#'} onClick={action('on-click')} unstyled>Twitter</Link>
  ));
