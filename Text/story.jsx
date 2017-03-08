import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Text from './index';

const text = 'The quick brown fox jumps over the lazy dog';

storiesOf('Text')
  .add('Default', () => (
    <Text>{text}</Text>
  ))
  .add('Large', () => (
    <Text size={'large'}>{text}</Text>
  ))
  .add('Small', () => (
    <Text size={'small'}>{text}</Text>
  ))
  .add('ExtraSmall', () => (
    <Text size={'extra-small'}>{text}</Text>
  ))
  .add('Bold', () => (
    <Text weight={'bold'}>{text}</Text>
  ))
  .add('Thin', () => (
    <Text weight={'thin'}>{text}</Text>
  ))
  .add('White', () => (
    <Text color={'white'}>{text}</Text>
  ))
  .add('Gray', () => (
    <Text color={'gray'}>{text}</Text>
  ))
  .add('torchRed', () => (
    <Text color={'torchRed'}>{text}</Text>
  ))
  .add('black', () => (
    <Text color={'black'}>{text}</Text>
  ))
  .add('blue', () => (
    <Text color={'blue'}>{text}</Text>
  ));
