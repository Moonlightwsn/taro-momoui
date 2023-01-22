import ejs from "ejs";
import fs from "fs";
import { getRootPath } from "../../bin/utils/index.js";
export default () => {
    const file = fs.readFileSync(getRootPath("template/main/main.ejs"));
    return ejs.render(file.toString(), {});
};
