import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import Text from './index';

const text = 'The quick brown fox jumps over the lazy dog';

storiesOf('Text', module)
  .addDecorator(checkA11y)
  .add('default', () => (
    <Text>{text}</Text>
  ))
  .add('black', () => (
    <Text color={'black'}>{text}</Text>
  ))
  .add('curiousBlue', () => (
    <Text color={'curiousBlue'}>{text}</Text>
  ))
  .add('shuttleGray', () => (
    <Text color={'shuttleGray'}>{text}</Text>
  ))
  .add('torchRed', () => (
    <Text color={'torchRed'}>{text}</Text>
  ))
  .add('outerSpace', () => (
    <Text color={'outerSpace'}>{text}</Text>
  ))
  .add('white', () => (
    <div style={{ backgroundColor: 'black' }}>
      <Text color={'white'}>{text}</Text>
    </div>
  ))
  .add('bold', () => (
    <Text weight={'bold'}>{text}</Text>
  ))
  .add('extra small', () => (
    <Text size={'extra-small'}>{text}</Text>
  ))
  .add('large', () => (
    <Text size={'large'}>{text}</Text>
  ))
  .add('extra-large', () => (
    <Text size={'extra-large'}>{text}</Text>
  ))
  .add('mini', () => (
    <Text size={'mini'}>{text}</Text>
  ))
  .add('small', () => (
    <Text size={'small'}>{text}</Text>
  ))
  .add('thin', () => (
    <Text weight={'thin'}>{text}</Text>
  ));
