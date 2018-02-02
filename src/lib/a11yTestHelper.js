// Modified from: https://gist.github.com/marcysutton/835c2fd90fadb631414b39523d5bda61
import { render, findDOMNode } from 'react-dom';
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
const testComponentA11y = (app) => {
  const div = document.createElement('div'); //eslint-disable-line
  document.body.appendChild(div); //eslint-disable-line

  render(app, div);
  const node = findDOMNode(div); //eslint-disable-line
  const config = {
    rules: {
      'color-contrast': { enabled: false },
    },
  };
  document.body.removeChild(div); //eslint-disable-line
  return new Promise((resolve) => {
    axeCore.a11yCheck(node, config, (results) => {
      resolve(results);
      report(results);
    });
  });
};

export default testComponentA11y;
