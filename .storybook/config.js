import { configure } from '@kadira/storybook';

// automatically import all story.js files
const req = require.context('../', true, /story\.jsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
