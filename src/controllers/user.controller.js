import userService from "../services/user.service.js";

class userController {
  constructor() {
    this.userService = new userService();
  }
  async getAllUsersController(req, res) {
    try {
      const users = await this.userService.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error(error.message);
    }
  }
  async addUserController(req, res) {
    try {
      const body = req.body;
      const user = await this.userService.addUser(body);
      if (user) {
        res.status(201).json({ message: "succese" });
      }
    } catch (error) {
      console.error(error.message);
      res.status(400).json({ message: error.message });
    }
  }
  async getActiveUserController(req, res) {
    const activUsers = await this.userService.getActivUser();
    res.json(activUsers);
  }
  async getUserIdController(req, res) {
    const id = req.params;
    const userId = await this.userService.getUserId(id);
    res.json(userId);
  }
  async userQueryController(req, res) {
    const query = req.query;
    const users = await this.userService.userQuery(query);
    res.json(users);
  }
}
export default userController;
