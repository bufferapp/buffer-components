import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import Video from './index';

storiesOf('Video', module)
  .addDecorator(checkA11y)
  .add('Default', () => (
    <Video
      sources={[
        {
          src: 'https://buffer-media-uploads.s3.amazonaws.com/52bc7a190a0e32ec4c000020/57bf2d1c6896977343f80535/output/87be589cc006a816411e8799ad3e67d9.original.mp4',
          type: 'mp4',
        },
      ]}
    />
  ))
  .add('No Controls', () => (
    <Video
      sources={[
        {
          src: 'https://buffer-media-uploads.s3.amazonaws.com/52bc7a190a0e32ec4c000020/57bf2d1c6896977343f80535/output/87be589cc006a816411e8799ad3e67d9.original.mp4',
          type: 'mp4',
        },
      ]}
      controls={false}
    />
  ))
  .add('W=100%', () => (
    <Video
      sources={[
        {
          src: 'https://buffer-media-uploads.s3.amazonaws.com/52bc7a190a0e32ec4c000020/57bf2d1c6896977343f80535/output/87be589cc006a816411e8799ad3e67d9.original.mp4',
          type: 'mp4',
        },
      ]}
      width={'100%'}
    />
  ))
  .add('W=200px H=100px', () => (
    <Video
      sources={[
        {
          src: 'https://buffer-media-uploads.s3.amazonaws.com/52bc7a190a0e32ec4c000020/57bf2d1c6896977343f80535/output/87be589cc006a816411e8799ad3e67d9.original.mp4',
          type: 'mp4',
        },
      ]}
      width={'200px'}
      height={'100px'}
    />
  ))
  .add('rounded border', () => (
    <Video
      sources={[
        {
          src: 'https://buffer-media-uploads.s3.amazonaws.com/52bc7a190a0e32ec4c000020/57bf2d1c6896977343f80535/output/87be589cc006a816411e8799ad3e67d9.original.mp4',
          type: 'mp4',
        },
      ]}
      border={'rounded'}
    />
  ))
  .add('No Video', () => (
    <Video />
  ));
