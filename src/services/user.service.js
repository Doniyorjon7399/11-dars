import Io from "../utils/io.js";

class userService {
  constructor() {
    this.fileSystem = new Io();
  }
  async getAllUsers() {
    const users = await this.fileSystem.readFile("users.json");
    return users;
  }
  async addUser(body) {
    const users = await this.fileSystem.readFile("users.json");
    const findUser = users.find((user) => user.username === body.username);
    if (!findUser) {
      users.push(body);
      await this.fileSystem.writeFile("users.json", users);
      return users;
    }
    throw new Error("user already added");
  }
  async getActivUser() {
    const activeUser = await this.fileSystem.readFile("users.json");
    return activeUser.filter((user) => user.status === "active");
  }
  async getUserId(id) {
    const users = await this.fileSystem.readFile("users.json");
    return users.find((user) => user.id === Number(id.id));
  }
  async userQuery(query) {
    const usersQuery = await this.fileSystem.readFile("users.json");
    return usersQuery.find((user) => user.username == query.query);
  }
}
export default userService;
