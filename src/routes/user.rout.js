import { Router } from "express";
import userController from "../controllers/user.controller.js";
const userRouter = Router();
const controller = new userController();
userRouter.get("/api/users", (req, res) => {
  return controller.getAllUsersController(req, res);
});
userRouter.get("/api/users/active", (req, res) => {
  return controller.getActiveUserController(req, res);
});
userRouter.post("/api/user", (req, res) => {
  return controller.addUserController(req, res);
});
userRouter.get("/api/users/:id", (req, res) => {
  return controller.getUserIdController(req, res);
});
userRouter.post("/api/users/search", (req, res) => {
  return controller.userQueryController(req, res);
});
export default userRouter;
