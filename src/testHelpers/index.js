import renderer from 'react-test-renderer';

export const renderAndCheckSnapshot = (component) => {
  const renderedComponent = renderer.create(component);
  const tree = renderedComponent.toJSON();
  expect(tree).toMatchSnapshot();
};
