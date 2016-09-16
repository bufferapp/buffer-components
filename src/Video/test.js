jest.unmock('./index');
import React from 'react';
import { renderAndCheckSnapshot } from '../testHelpers';
import Video from './index';

describe('Video', () => {
  it('Video component', () => {
    renderAndCheckSnapshot(<Video />);
  });

  it('Video with source', () => {
    renderAndCheckSnapshot(
      <Video
        sources={[
          {
            src: 'https://buffer-media-uploads.s3.amazonaws.com/52bc7a190a0e32ec4c000020/57bf2d1c6896977343f80535/output/87be589cc006a816411e8799ad3e67d9.original.mp4',
            type: 'mp4',
          },
        ]}
      />
    );
  });

  it('Video without controls', () => {
    renderAndCheckSnapshot(
      <Video
        sources={[
          {
            src: 'https://buffer-media-uploads.s3.amazonaws.com/52bc7a190a0e32ec4c000020/57bf2d1c6896977343f80535/output/87be589cc006a816411e8799ad3e67d9.original.mp4',
            type: 'mp4',
          },
        ]}
        controls={false}
      />
    );
  });

  it('Video with width', () => {
    renderAndCheckSnapshot(
      <Video
        sources={[
          {
            src: 'https://buffer-media-uploads.s3.amazonaws.com/52bc7a190a0e32ec4c000020/57bf2d1c6896977343f80535/output/87be589cc006a816411e8799ad3e67d9.original.mp4',
            type: 'mp4',
          },
        ]}
        width={"50px"}
      />
    );
  });

  it('Video with height', () => {
    renderAndCheckSnapshot(
      <Video
        sources={[
          {
            src: 'https://buffer-media-uploads.s3.amazonaws.com/52bc7a190a0e32ec4c000020/57bf2d1c6896977343f80535/output/87be589cc006a816411e8799ad3e67d9.original.mp4',
            type: 'mp4',
          },
        ]}
        height={"50px"}
      />
    );
  });

  it('Video with borderRadius', () => {
    renderAndCheckSnapshot(<Video borderRadius={5} />);
  });
});
