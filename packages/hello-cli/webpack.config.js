const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    port: 6666
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}