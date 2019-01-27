import React from 'react';
import { configure } from '@storybook/react';

const contextRequire = require.context('../src/', true, /stories\.jsx$/);

const loadStories = () => {
  contextRequire.keys().forEach(contextRequire);
};

configure(loadStories, module);
