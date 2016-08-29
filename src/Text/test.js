jest.unmock('./index');
import React from 'react';
import Text from './index';
import renderer from 'react-test-renderer';

describe('Text', () => {
  it('Renders a plain Text component', () => {
    const component = renderer.create(
      <Text>Howdy!</Text>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders Text with some color', () => {
    const component = renderer.create(
      <Text color={"#329ced"}>Howdy! (In Color)</Text>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
