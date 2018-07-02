import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import Card from './index';
import Link from '../Link';
import { denim, yellowLight, yellowUltraLight } from '../style/color';

storiesOf('Card', module)
  .addDecorator(checkA11y)
  .add('default', () => (
    <Card>
      What is a Product Designer? An awesome story by <Link href="#">@jgadapee</Link> over on
      Medium! <Link href="#">http://buff.ly/1LTbUqv</Link>
    </Card>
  ))
  .add('doublePadding', () => (
    <Card doublePadding>
      What is a Product Designer? An awesome story by <Link href="#">@jgadapee</Link> over on
      Medium! <Link href="#">http://buff.ly/1LTbUqv</Link>
    </Card>
  ))
  .add('empty', () => <Card empty>Nothing to see here! 👻</Card>)
  .add('failed', () => (
    <Card failed>
      What is a Product Designer? An awesome story by <Link href="#">@jgadapee</Link> over on
      Medium! <Link href="#">http://buff.ly/1LTbUqv</Link>
    </Card>
  ))
  .add('faded', () => (
    <Card faded>
      What is a Product Designer? An awesome story by <Link href="#">@jgadapee</Link> over on
      Medium! <Link href="#">http://buff.ly/1LTbUqv</Link>
    </Card>
  ))
  .add('noBorder', () => (
    <Card noBorder>
      What is a Product Designer? An awesome story by <Link href="#">@jgadapee</Link> over on
      Medium! <Link href="#">http://buff.ly/1LTbUqv</Link>
    </Card>
  ))
  .add('noPadding', () => (
    <Card noPadding>
      What is a Product Designer? An awesome story by <Link href="#">@jgadapee</Link> over on
      Medium! <Link href="#">http://buff.ly/1LTbUqv</Link>
    </Card>
  ))
  .add('hovered', () => (
    <Card hovered>
      What is a Product Designer? An awesome story by <Link href="#">@jgadapee</Link> over on
      Medium! <Link href="#">http://buff.ly/1LTbUqv</Link>
    </Card>
  ))
  .add('empty + hovered', () => (
    <Card empty hovered>
      What is a Product Designer? An awesome story by <Link href="#">@jgadapee</Link> over on
      Medium! <Link href="#">http://buff.ly/1LTbUqv</Link>
    </Card>
  ))
  .add('onMouseEnter + onMouseLeave', () => (
    <Card onMouseEnter={action('on-mouse-enter')} onMouseLeave={action('on-mouse-leave')}>
      What is a Product Designer? An awesome story by <Link href="#">@jgadapee</Link> over on
      Medium! <Link href="#">http://buff.ly/1LTbUqv</Link>
    </Card>
  ))
  .add('denim background color', () => (
    <Card background={denim}>
      What is a Product Designer? An awesome story by <Link href="#">@jgadapee</Link> over on
      Medium! <Link href="#">http://buff.ly/1LTbUqv</Link>
    </Card>
  ))
  .add('reducedPadding', () => (
    <Card reducedPadding>
      What is a Product Designer? An awesome story by <Link href="#">@jgadapee</Link> over on
      Medium! <Link href="#">http://buff.ly/1LTbUqv</Link>
    </Card>
  ))
  .add('shadowHeight=1', () => (
    <Card shadowHeight={1}>
      What is a Product Designer? An awesome story by <Link href="#">@jgadapee</Link> over on
      Medium! <Link href="#">http://buff.ly/1LTbUqv</Link>
    </Card>
  ))
  .add('shadowHeight=2', () => (
    <Card shadowHeight={2}>
      What is a Product Designer? An awesome story by <Link href="#">@jgadapee</Link> over on
      Medium! <Link href="#">http://buff.ly/1LTbUqv</Link>
    </Card>
  ))
  .add('borderColor=denim', () => (
    <Card borderColor={denim}>
      What is a Product Designer? An awesome story by <Link href="#">@jgadapee</Link> over on
      Medium! <Link href="#">http://buff.ly/1LTbUqv</Link>
    </Card>
  ))
  .add('borderColor=yellowLight, background=yellowUltraLight', () => (
    <Card borderColor={yellowLight} background={yellowUltraLight}>
      What is a Product Designer? An awesome story by <Link href="#">@jgadapee</Link> over on
      Medium! <Link href="#">http://buff.ly/1LTbUqv</Link>
    </Card>
  ));
