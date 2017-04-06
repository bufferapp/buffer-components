import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import Text from './index';

const text = 'The quick brown fox jumps over the lazy dog';

storiesOf('Text')
  .addDecorator(checkA11y)
  .add('Default', () => (
    <Text>{text}</Text>
  ))
  .add('Black', () => (
    <Text color={'black'}>{text}</Text>
  ))
  .add('Blue', () => (
    <Text color={'blue'}>{text}</Text>
  ))
  .add('Bold', () => (
    <Text weight={'bold'}>{text}</Text>
  ))
  .add('ExtraSmall', () => (
    <Text size={'extra-small'}>{text}</Text>
  ))
  .add('Gray', () => (
    <Text color={'gray'}>{text}</Text>
  ))
  .add('Large', () => (
    <Text size={'large'}>{text}</Text>
  ))
  .add('Mini', () => (
    <Text size={'mini'}>{text}</Text>
  ))
  .add('Red', () => (
    <Text color={'red'}>{text}</Text>
  ))
  .add('Small', () => (
    <Text size={'small'}>{text}</Text>
  ))
  .add('Thin', () => (
    <Text weight={'thin'}>{text}</Text>
  ))
  .add('White', () => (
    <Text color={'white'}>{text}</Text>
  ));
