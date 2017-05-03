import { findDOMNode } from 'react-dom';
import { mount } from 'enzyme';
import axeCore from 'axe-core';

const a11yTestHelper = {};

/**
 * Test a component with Enzyme.
 *
 * @param {any} app - Your app reference.
 * @param {object} config (optional) - An aXe config object to enable/disable rules. See
 * [axe.a11yCheck](https://github.com/dequelabs/axe-core/blob/master/doc/API.md#options-parameter).
 * @param {function} callback - A callback function to execute when aXe returns.
 */
a11yTestHelper.testComponent = (app, config, callback) => {
  const div = document.createElement('div'); //eslint-disable-line
  document.body.appendChild(div); //eslint-disable-line

  const wrapper = mount(app, { attachTo: div });
  const node = findDOMNode(wrapper.component);

  if (typeof config === 'function') {
    config = {};
  }
  a11yTestHelper.a11yCheck(node, config, callback);
  document.body.removeChild(div); //eslint-disable-line
};
/**
 * Run an aXe audit.
 * @private
 *
 * @param {object} node - A node reference from your app.
 * @param {object} config - An aXe config or empty object.
 * @param {function} callback - A callback function to execute when aXe returns.
 */
a11yTestHelper.a11yCheck = (node, config, callback) => {
  const oldNode = global.Node;
  global.Node = node.ownerDocument.defaultView.Node;

  axeCore.a11yCheck(node, config, (results) => {
    global.Node = oldNode;
    a11yTestHelper.report(results);
    // return to the test expectation
    if (callback) callback(results);
  });
};
/**
 * Report results in a readable fashion.
 * @private
 * @param {object} results - The aXe [results object](https://github.com/dequelabs/axe-core/blob/master/doc/API.md#results-object).
 */
a11yTestHelper.report = (results) => {
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
module.exports = a11yTestHelper;
