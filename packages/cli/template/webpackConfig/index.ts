import ejs from "ejs"
import fs from "fs"

import { getRootPath } from "../../bin/utils/index.js"

export default ({ devtool, port }: { devtool: string; port: number }) => {
  const file = fs.readFileSync(
    getRootPath("template/webpackConfig/webpackConfig.ejs")
  )
  return ejs.render(file.toString(), { devtool, port })
}