const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    clean: true,
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    port: 8989
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}