import { Router } from "express";
import BooksController from "../controllers/books.controller.js";
const booksRouter = Router();
const controller = new BooksController();
booksRouter.get("/books", async (req, res) => {
  return controller.booksAllController(req, res);
});
booksRouter.get("/books/category/:name", async (req, res) => {
  return controller.booksCategoryController(req, res);
});
booksRouter.get("/books/author", async (req, res) => {
  return controller.getBooksByAuthorController(req, res);
});
booksRouter.post("/books/addbook", async (req, res) => {
  return controller.addBookController(req, res);
});
export default booksRouter;
