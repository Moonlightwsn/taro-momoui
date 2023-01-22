#!/usr/bin/env node
import fs from "fs";
import { execaSync, execaCommandSync } from "execa";
import main from "../template/main/index.js";
import indexHtml from "../template/indexHtml/index.js";
import webpackConfig from "../template/webpackConfig/index.js";
import packageify from "../template/package/index.js";
import question from "../prompt/index.js";
const config = await question();
const getProjectPath = ({ packageName }) => `../${packageName}`;
execaCommandSync(`rm -rf ${getProjectPath(config)}`);
fs.mkdirSync(getProjectPath(config));
fs.mkdirSync(`${getProjectPath(config)}/src`);
fs.writeFileSync(`${getProjectPath(config)}/src/index.js`, main());
fs.writeFileSync(`${getProjectPath(config)}/index.html`, indexHtml(config));
fs.writeFileSync(`${getProjectPath(config)}/webpack.config.js`, webpackConfig(config));
fs.writeFileSync(`${getProjectPath(config)}/package.json`, packageify(config));
execaSync(config.installTool, ["install"], {
    cwd: getProjectPath(config),
    stdio: [2, 2, 2], // 使子进程的输入输出流继承父进程
});
