import React from 'react';
import testComponentA11y from '../lib/a11yTestHelper';
import Video from './index';

describe('Video', () => {
  it('should pass accessibility audit', () => testComponentA11y(<Video
    sources={[
        {
          src: 'https://buffer-media-uploads.s3.amazonaws.com/52bc7a190a0e32ec4c000020/57bf2d1c6896977343f80535/output/87be589cc006a816411e8799ad3e67d9.original.mp4',
          type: 'mp4',
        },
      ]}
  />)
    .then(results => expect(results.violations.length).toBe(0)));
});
