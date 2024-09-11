import React from 'react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-actions' or i... Remove this comment to see the full error message
import { action } from '@storybook/addon-actions';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-a11y' or its ... Remove this comment to see the full error message
import { withA11y } from '@storybook/addon-a11y';
import Card from './index';
import Link from '../Link';
import { denim, yellowLight, yellowUltraLight } from '../style/color';

storiesOf('Card', module)
  .addDecorator(withA11y)
  .add('default', () => (
    <Card>
      // @ts-expect-error TS(2322): Type '{ children: string; href: string; }' is not ... Remove this comment to see the full error message
      What is a Product Designer? An awesome story by <Link href="#">@jgadapee</Link> over on
      // @ts-expect-error TS(2322): Type '{ children: string; href: string; }' is not ... Remove this comment to see the full error message
      Medium! <Link href="#">http://buff.ly/1LTbUqv</Link>
    </Card>
  ))
  .add('doublePadding', () => (
    <Card doublePadding>
      // @ts-expect-error TS(2322): Type '{ children: string; href: string; }' is not ... Remove this comment to see the full error message
      What is a Product Designer? An awesome story by <Link href="#">@jgadapee</Link> over on
      // @ts-expect-error TS(2322): Type '{ children: string; href: string; }' is not ... Remove this comment to see the full error message
      Medium! <Link href="#">http://buff.ly/1LTbUqv</Link>
    </Card>
  ))
  .add('empty', () => <Card empty>Nothing to see here! 👻</Card>)
  .add('failed', () => (
    <Card failed>
      // @ts-expect-error TS(2322): Type '{ children: string; href: string; }' is not ... Remove this comment to see the full error message
      What is a Product Designer? An awesome story by <Link href="#">@jgadapee</Link> over on
      // @ts-expect-error TS(2322): Type '{ children: string; href: string; }' is not ... Remove this comment to see the full error message
      Medium! <Link href="#">http://buff.ly/1LTbUqv</Link>
    </Card>
  ))
  .add('faded', () => (
    <Card faded>
      // @ts-expect-error TS(2322): Type '{ children: string; href: string; }' is not ... Remove this comment to see the full error message
      What is a Product Designer? An awesome story by <Link href="#">@jgadapee</Link> over on
      // @ts-expect-error TS(2322): Type '{ children: string; href: string; }' is not ... Remove this comment to see the full error message
      Medium! <Link href="#">http://buff.ly/1LTbUqv</Link>
    </Card>
  ))
  .add('noBorder', () => (
    <Card noBorder>
      // @ts-expect-error TS(2322): Type '{ children: string; href: string; }' is not ... Remove this comment to see the full error message
      What is a Product Designer? An awesome story by <Link href="#">@jgadapee</Link> over on
      // @ts-expect-error TS(2322): Type '{ children: string; href: string; }' is not ... Remove this comment to see the full error message
      Medium! <Link href="#">http://buff.ly/1LTbUqv</Link>
    </Card>
  ))
  .add('noPadding', () => (
    <Card noPadding>
      // @ts-expect-error TS(2322): Type '{ children: string; href: string; }' is not ... Remove this comment to see the full error message
      What is a Product Designer? An awesome story by <Link href="#">@jgadapee</Link> over on
      // @ts-expect-error TS(2322): Type '{ children: string; href: string; }' is not ... Remove this comment to see the full error message
      Medium! <Link href="#">http://buff.ly/1LTbUqv</Link>
    </Card>
  ))
  .add('hovered', () => (
    <Card hovered>
      // @ts-expect-error TS(2322): Type '{ children: string; href: string; }' is not ... Remove this comment to see the full error message
      What is a Product Designer? An awesome story by <Link href="#">@jgadapee</Link> over on
      // @ts-expect-error TS(2322): Type '{ children: string; href: string; }' is not ... Remove this comment to see the full error message
      Medium! <Link href="#">http://buff.ly/1LTbUqv</Link>
    </Card>
  ))
  .add('empty + hovered', () => (
    <Card empty hovered>
      // @ts-expect-error TS(2322): Type '{ children: string; href: string; }' is not ... Remove this comment to see the full error message
      What is a Product Designer? An awesome story by <Link href="#">@jgadapee</Link> over on
      // @ts-expect-error TS(2322): Type '{ children: string; href: string; }' is not ... Remove this comment to see the full error message
      Medium! <Link href="#">http://buff.ly/1LTbUqv</Link>
    </Card>
  ))
  .add('onMouseEnter + onMouseLeave', () => (
    <Card onMouseEnter={action('on-mouse-enter')} onMouseLeave={action('on-mouse-leave')}>
      // @ts-expect-error TS(2322): Type '{ children: string; href: string; }' is not ... Remove this comment to see the full error message
      What is a Product Designer? An awesome story by <Link href="#">@jgadapee</Link> over on
      // @ts-expect-error TS(2322): Type '{ children: string; href: string; }' is not ... Remove this comment to see the full error message
      Medium! <Link href="#">http://buff.ly/1LTbUqv</Link>
    </Card>
  ))
  .add('denim backgroundColor color', () => (
    <Card backgroundColor={denim}>
      // @ts-expect-error TS(2322): Type '{ children: string; href: string; }' is not ... Remove this comment to see the full error message
      What is a Product Designer? An awesome story by <Link href="#">@jgadapee</Link> over on
      // @ts-expect-error TS(2322): Type '{ children: string; href: string; }' is not ... Remove this comment to see the full error message
      Medium! <Link href="#">http://buff.ly/1LTbUqv</Link>
    </Card>
  ))
  .add('reducedPadding', () => (
    <Card reducedPadding>
      // @ts-expect-error TS(2322): Type '{ children: string; href: string; }' is not ... Remove this comment to see the full error message
      What is a Product Designer? An awesome story by <Link href="#">@jgadapee</Link> over on
      // @ts-expect-error TS(2322): Type '{ children: string; href: string; }' is not ... Remove this comment to see the full error message
      Medium! <Link href="#">http://buff.ly/1LTbUqv</Link>
    </Card>
  ))
  .add('shadowHeight=1', () => (
    <Card shadowHeight={1}>
      // @ts-expect-error TS(2322): Type '{ children: string; href: string; }' is not ... Remove this comment to see the full error message
      What is a Product Designer? An awesome story by <Link href="#">@jgadapee</Link> over on
      // @ts-expect-error TS(2322): Type '{ children: string; href: string; }' is not ... Remove this comment to see the full error message
      Medium! <Link href="#">http://buff.ly/1LTbUqv</Link>
    </Card>
  ))
  .add('shadowHeight=2', () => (
    <Card shadowHeight={2}>
      // @ts-expect-error TS(2322): Type '{ children: string; href: string; }' is not ... Remove this comment to see the full error message
      What is a Product Designer? An awesome story by <Link href="#">@jgadapee</Link> over on
      // @ts-expect-error TS(2322): Type '{ children: string; href: string; }' is not ... Remove this comment to see the full error message
      Medium! <Link href="#">http://buff.ly/1LTbUqv</Link>
    </Card>
  ))
  .add('borderColor=denim', () => (
    <Card borderColor={denim}>
      // @ts-expect-error TS(2322): Type '{ children: string; href: string; }' is not ... Remove this comment to see the full error message
      What is a Product Designer? An awesome story by <Link href="#">@jgadapee</Link> over on
      // @ts-expect-error TS(2322): Type '{ children: string; href: string; }' is not ... Remove this comment to see the full error message
      Medium! <Link href="#">http://buff.ly/1LTbUqv</Link>
    </Card>
  ))
  .add('borderColor=yellowLight, backgroundColor=yellowUltraLight', () => (
    <Card borderColor={yellowLight} backgroundColor={yellowUltraLight}>
      // @ts-expect-error TS(2322): Type '{ children: string; href: string; }' is not ... Remove this comment to see the full error message
      What is a Product Designer? An awesome story by <Link href="#">@jgadapee</Link> over on
      // @ts-expect-error TS(2322): Type '{ children: string; href: string; }' is not ... Remove this comment to see the full error message
      Medium! <Link href="#">http://buff.ly/1LTbUqv</Link>
    </Card>
  ));
