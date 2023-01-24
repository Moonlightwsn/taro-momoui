#!/usr/bin/env node

import fs from "fs"
import { execaSync, execaCommandSync } from "execa"
import chalk from "chalk"
import main from "../template/main/index.js"
import indexHtml from "../template/indexHtml/index.js"
import webpackConfig from "../template/webpackConfig/index.js"
import packageify from "../template/package/index.js"

import question from "../prompt/index.js"

const config = await question()

const getProjectPath = ({ packageName }: { packageName: string }) =>
  `../${packageName}`

execaCommandSync(`rm -rf ${getProjectPath(config)}`)

fs.mkdirSync(getProjectPath(config))
fs.mkdirSync(`${getProjectPath(config)}/src`)
console.log(chalk.blue(`创建文件夹 -> ${getProjectPath(config)}`))

fs.writeFileSync(`${getProjectPath(config)}/src/index.js`, main())
fs.writeFileSync(`${getProjectPath(config)}/index.html`, indexHtml(config))
fs.writeFileSync(
  `${getProjectPath(config)}/webpack.config.js`,
  webpackConfig(config)
)
console.log(chalk.blue(`创建入口文件与相关文件 -> index.js...`))

fs.writeFileSync(`${getProjectPath(config)}/package.json`, packageify(config))
console.log(chalk.blue(`创建package.json`))

console.log(chalk.blue(`开始安装依赖...`))
execaSync(config.installTool, ["install"], {
  cwd: getProjectPath(config), // 根路径
  stdio: [2, 2, 2], // 使子进程的输入输出流继承父进程
})
