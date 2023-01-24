const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    clean: true,
  },
  devtool: "eval-cheap-source-map",
  devServer: {
    port: 6666,
  },
  plugins: [new HtmlWebpackPlugin()],
};
