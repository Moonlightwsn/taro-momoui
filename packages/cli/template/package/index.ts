import ejs from "ejs"
import fs from "fs"
import prettier from "prettier"
import { getRootPath } from "../../bin/utils/index.js"

export default ({ packageName }: { packageName: string }) => {
  const file = fs.readFileSync(getRootPath("template/package/package.ejs"))
  const code = ejs.render(file.toString(), { packageName })
  return prettier.format(code, { parser: "json" })
}
