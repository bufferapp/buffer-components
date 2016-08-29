jest.unmock('./index');
import React from 'react';
import Image from './index';
import renderer from 'react-test-renderer';

describe('Image', () => {
  it('Image component', () => {
    const component = renderer.create(
      <Image src={"/cool/image.png"} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Image w/ custom alt text', () => {
    const component = renderer.create(
      <Image
        src={"/cool/image.png"}
        alt={"Alternate"}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Image w/ width', () => {
    const component = renderer.create(
      <Image
        src={"/cool/image.png"}
        width={"50px"}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Image w/ height', () => {
    const component = renderer.create(
      <Image
        src={"/cool/image.png"}
        height={"50px"}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
