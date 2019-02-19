import { configure } from '@storybook/react'

function loadStories () {
  require('../src/stories/welcome');
  // automatically import all story js files that end with *.stories.js
  const req = require.context('../src', true, /\.story\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module)