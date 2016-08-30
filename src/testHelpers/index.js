export const renderAndCheckSnapshot = (component) => {
  const renderedComponent = renderer.create(component);
  const tree = renderedComponent.toJSON();
  expect(tree).toMatchSnapshot();
};
