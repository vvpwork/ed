const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.[tj]s"],
  addons: ["@storybook/preset-create-react-app"],
//   view webpack default  config 
//   webpackFinal: (config) => console.dir(config, { depth: null }) || config,
};

