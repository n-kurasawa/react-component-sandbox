import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import "../vendor/css/beagle.css"

addDecorator(withInfo);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
