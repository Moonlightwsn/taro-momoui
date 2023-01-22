import ejs from "ejs"
import fs from "fs"

import { getRootPath } from "../../bin/utils/index.js"

export default ({ packageName }: { packageName: string }) => {
  const file = fs.readFileSync(getRootPath("template/indexHtml/indexHtml.ejs"))
  return ejs.render(file.toString(), { packageName })
}
