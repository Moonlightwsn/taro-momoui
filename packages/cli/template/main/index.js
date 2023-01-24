import ejs from "ejs";
import fs from "fs";
import prettier from "prettier";
import { getCliRootPath } from "../../bin/utils/index.js";
export default () => {
    const file = fs.readFileSync(getCliRootPath("template/main/main.ejs"));
    const code = ejs.render(file.toString(), {});
    return prettier.format(code, { parser: "babel" });
};
