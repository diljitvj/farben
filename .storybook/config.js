import { configure } from "@storybook/react";

function loadStories() {
  const req = require.context("../src/", true, /\__stories__\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
