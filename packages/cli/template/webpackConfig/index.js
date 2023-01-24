import ejs from "ejs";
import fs from "fs";
import prettier from "prettier";
import { getCliRootPath } from "../../bin/utils/index.js";
export default ({ devtool, port }) => {
    const file = fs.readFileSync(getCliRootPath("template/webpackConfig/webpackConfig.ejs"));
    const code = ejs.render(file.toString(), { devtool, port });
    return prettier.format(code, { parser: "babel" });
};
