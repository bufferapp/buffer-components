jest.unmock('./index');
import React from 'react';
import Text from './index';
import renderer from 'react-test-renderer';

describe('Text', () => {
  it('Text component', () => {
    const component = renderer.create(
      <Text>Howdy!</Text>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Text w/ Color', () => {
    const component = renderer.create(
      <Text color={"#329ced"}>Howdy! (In Color)</Text>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Text w/ Size', () => {
    const component = renderer.create(
      <Text size={2}>Big Howdy!</Text>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
