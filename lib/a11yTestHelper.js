// Modified from: https://gist.github.com/marcysutton/835c2fd90fadb631414b39523d5bda61
import { findDOMNode } from 'react-dom';
import { mount } from 'enzyme';
import axeCore from 'axe-core';

/**
 * Report results in a readable fashion.
 * @private
 * @param {object} results - The aXe [results object](https://github.com/dequelabs/axe-core/blob/master/doc/API.md#results-object).
 */
 /* istanbul ignore next */
const report = (results) => {
  // output some useful information
  let failureNotice = '';
  if (results.violations.length > 0) {
    failureNotice += 'Accessibility violations:\n'; //eslint-disable-line
    results.violations.forEach((violation) => {
      failureNotice += violation.description + '\n'; //eslint-disable-line
      failureNotice += 'HTML Nodes: \n'; //eslint-disable-line
      violation.nodes.forEach((node) => {
        failureNotice += node.html + '\n'; //eslint-disable-line
      });
    });
    console.log(failureNotice); //eslint-disable-line
  }
};

/**
 * Test a component with Enzyme.
 *
 * @param {any} app - Your app reference.
 * @param {object} config (optional) - An aXe config object to enable/disable rules. See
 * [axe.a11yCheck](https://github.com/dequelabs/axe-core/blob/master/doc/API.md#options-parameter).
 * @param {function} callback - A callback function to execute when aXe returns.
 */
 /* istanbul ignore next */
const testComponentA11y = (app, config = []) => {
  const div = document.createElement('div'); //eslint-disable-line
  document.body.appendChild(div); //eslint-disable-line

  const wrapper = mount(app, { attachTo: div });
  const node = findDOMNode(wrapper.component);

  if (typeof config === 'function') {
    config = {};
  }
  document.body.removeChild(div); //eslint-disable-line
  const oldNode = global.Node;
  global.Node = node.ownerDocument.defaultView.Node;
  return new Promise((resolve) => {
    axeCore.a11yCheck(node, config, (results) => {
      global.Node = oldNode;
      resolve(results);
      report(results);
    });
  });
};

export default testComponentA11y;
