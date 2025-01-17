import { join } from "path";
import { readFile, writeFile } from "fs/promises";
class Io {
  constructor() {
    this.baseRoot = process.cwd();
  }
  async readfile(fileName) {
    try {
      const path = join(this.baseRoot, "src", "data", fileName);
      const users = await readFile(path, "utf-8");
      return JSON.parse(users);
    } catch (error) {
      console.error(error.message);
    }
  }
  async writeFile(fileName, data) {
    try {
      const path = join(this.baseRoot, "src", "data", fileName);
      await writeFile(path, JSON.stringify(data, null, 2), "utf-8");
    } catch (error) {
      console.error(error.message);
    }
  }
}
export default Io;
