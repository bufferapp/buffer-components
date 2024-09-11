import { configure } from '@storybook/react';

// automatically import all story.js files
const req = require.context('../src', true, /story\.jsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
