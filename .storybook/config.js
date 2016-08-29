import { configure } from '@kadira/storybook';

// automatically import all story.js file
const req = require.context('./', true, /story\.js$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
