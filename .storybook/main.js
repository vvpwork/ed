const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.[tj]s"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions/register",
    "@storybook/addon-links/register"
  ]
  //   view webpack default  config
  // webpackFinal: (config) => console.dir(config, { depth: null }) || config,
};
