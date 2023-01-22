import ejs from "ejs";
import fs from "fs";
import { getRootPath } from "../../bin/utils/index.js";
export default ({ packageName }) => {
    const file = fs.readFileSync(getRootPath("template/package/package.ejs"));
    return ejs.render(file.toString(), { packageName });
};
