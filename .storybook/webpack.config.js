const path = require("path");

module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.resolve.modules.push(path.resolve(__dirname, "../src"));
  config.module.rules.push({
    test: /\.(ttf|woff|woff2|eot)$/,
    use: ["file-loader"],
    include: path.resolve(__dirname, "../")
  });
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: "style-loader"
      },
      {
        loader: "css-loader",
        options: {
          modules: true
        }
      },
      {
        loader: "sass-loader",
        options: {
          webpackImporter: true
        }
      }
    ],
    include: path.resolve(__dirname, "../")
  });

  // Return the altered config
  return config;
};
