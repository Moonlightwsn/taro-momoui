import path from "path";
import { fileURLToPath } from "url";
const __dirname = fileURLToPath(import.meta.url);
export const getCliRootPath = (pathUrl) => {
    return path.resolve(__dirname, `../../../${pathUrl}`);
};
