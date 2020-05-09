const path = require("path");

module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.resolve.modules.push(path.resolve(__dirname, "../src"));
  config.module.rules.push({
    test: /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
    loader: require.resolve("file-loader"),
    query: {
      name: "static/media/[name].[hash:8].[ext]"
    }
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
