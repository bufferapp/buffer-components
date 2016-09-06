import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Text from './index';

const text = 'The quick brown fox jumps over the lazy dog';

storiesOf('Text')
  .add('Default', () => (
    <Text>{text}</Text>
  ))
  .add('Color', () => (
    <Text color={"#329ced"}>{text}</Text>
  ))
  .add('Large', () => (
    <Text size={36}>{text}</Text>
  ))
  .add('Small', () => (
    <Text size={10}>{text}</Text>
  ))
  .add('Bold', () => (
    <Text weight={800}>{text}</Text>
  ))
  .add('Thin', () => (
    <Text weight={200}>{text}</Text>
  ));
