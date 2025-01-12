import fs from "fs/promises";
import { join } from "path";
class Io {
  constructor() {
    this.baseRoot = process.cwd();
  }
  async readFile(fileName) {
    try {
      const path = join(this.baseRoot, "src", "data", fileName);
      const data = await fs.readFile(path, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      console.error(error.message);
    }
  }
  async writeFile(fileName, data) {
    try {
      const path = join(this.baseRoot, "src", "data", fileName);
      await fs.writeFile(path, JSON.stringify(data, null, 2), "utf-8");
    } catch (error) {
      console.error(error.message);
    }
  }
}
export default Io;
