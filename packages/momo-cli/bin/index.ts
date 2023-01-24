#!/usr/bin/env node
import path from "path"
import { execa } from "execa"
import chalk from "chalk"

import question from "../prompt/index.js"

const config = await question()
const { packageName } = config || {}

const cwd = path.resolve(process.cwd())
const projectPath = path.resolve(cwd, packageName)

console.log(chalk.green("初始化taro react lib项目"))
console.log(chalk.greenBright("拉取最新github仓库..."))
await execa("rm", ["-rf", projectPath])
await execa(
  "git",
  [
    "clone",
    "https://github.com/Moonlightwsn/taro-uilib-react.git",
    packageName,
  ],
  {
    cwd,
    stdio: [2, 2, 2],
  }
)
await execa("rm", ["-rf", path.resolve(projectPath, ".git")])
console.log(chalk.green("github仓库代码拉取完毕"))
console.log(chalk.greenBright("开始安装依赖..."))
await execa(config.installTool, ["install"], {
  cwd, // 根路径
  stdio: [2, 2, 2], // 使子进程的输入输出流继承父进程
})
