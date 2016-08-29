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
    <Text size={2}>{text}</Text>
  ))
  .add('Small', () => (
    <Text size={0.75}>{text}</Text>
  ));
