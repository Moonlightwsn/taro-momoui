import fs from "fs"
import main from "../template/main/index.js"
import indexHtml from "../template/indexHtml/index.js"
import webpackConfig from "../template/webpackConfig/index.js"
import packageify from "../template/package/index.js"

const getProjectPath = () => "./helloWorld"

const config = {
  packageName: "HelloWorld",
  port: 8088,
  devtool: "eval-cheap-module-source-map",
}

fs.mkdirSync(getProjectPath())
fs.mkdirSync(`${getProjectPath()}/src`)

fs.writeFileSync(`${getProjectPath()}/src/index.js`, main())
fs.writeFileSync(`${getProjectPath()}/index.html`, indexHtml(config))
fs.writeFileSync(`${getProjectPath()}/webpack.config.js`, webpackConfig(config))

fs.writeFileSync(`${getProjectPath()}/package.json`, packageify(config))
