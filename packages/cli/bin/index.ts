#!/usr/bin/env node

import fs from "fs"
import path from "path"
import { execaSync, execaCommandSync } from "execa"
import chalk from "chalk"
import main from "../template/main/index.js"
import indexHtml from "../template/indexHtml/index.js"
import webpackConfig from "../template/webpackConfig/index.js"
import packageify from "../template/package/index.js"

import question from "../prompt/index.js"

const getProjectPath = (relativePath?: string) => {
  return path.resolve(process.cwd(), relativePath || "")
}

const config = await question()

execaCommandSync(`rm -rf ${getProjectPath("./src")}`)
fs.mkdirSync(getProjectPath("./src"))
console.log(chalk.blue(`创建文件夹 -> ${getProjectPath("./src")}`))

fs.writeFileSync(getProjectPath("./src/index.js"), main())
execaCommandSync(`rm -rf ${getProjectPath("./index.html")}`)
fs.writeFileSync(getProjectPath("./index.html"), indexHtml(config))
execaCommandSync(`rm -rf ${getProjectPath("./webpack.config.js")}`)
fs.writeFileSync(getProjectPath("./webpack.config.js"), webpackConfig(config))
console.log(chalk.blue(`创建入口文件与相关文件 -> index.js...`))

execaCommandSync(`rm -rf ${getProjectPath("./package.json")}`)
fs.writeFileSync(getProjectPath("./package.json"), packageify(config))
console.log(chalk.blue(`创建package.json`))

console.log(chalk.blue(`开始安装依赖...`))
execaCommandSync(`rm -rf ${getProjectPath("./node_modules")}`)
execaSync(config.installTool, ["install"], {
  cwd: getProjectPath(), // 根路径
  stdio: [2, 2, 2], // 使子进程的输入输出流继承父进程
})
