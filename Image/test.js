jest.unmock('./index');
import React from 'react';
import { renderAndCheckSnapshot } from '../testHelpers';
import Image from './index';

describe('Image', () => {
  it('Image component', () => {
    renderAndCheckSnapshot(<Image src={"/cool/image.png"} />);
  });

  it('Image w/ custom alt text', () => {
    renderAndCheckSnapshot(
      <Image
        src={"/cool/image.png"}
        alt={"Alternate"}
      />
    );
  });

  it('Image w/ width', () => {
    renderAndCheckSnapshot(
      <Image
        src={"/cool/image.png"}
        width={"50px"}
      />
    );
  });

  it('Image w/ height', () => {
    renderAndCheckSnapshot(
      <Image
        src={"/cool/image.png"}
        height={"50px"}
      />
    );
  });
});
