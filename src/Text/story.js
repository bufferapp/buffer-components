import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Text from './index.js';

const text = 'The quick brown fox jumps over the lazy dog';

storiesOf('Text')
  .add('Default', () => (
    <Text>{text}</Text>
  ))
  .add('Text with color', () => (
    <Text color={"#329ced"}>{text}</Text>
  ));
