import { configure } from '@storybook/react';
import 'react-chromatic/storybook-addon';

// automatically import all story.js files
const req = require.context('../', true, /story\.jsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
