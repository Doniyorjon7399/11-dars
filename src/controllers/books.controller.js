import BooksService from "../services/books.service.js";
class BooksController {
  constructor() {
    this.booksService = new BooksService();
  }
  async booksAllController(req, res) {
    try {
      const books = await this.booksService.getAllBooks();
      res.json(books);
    } catch (error) {
      console.error(error.message);
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async booksCategoryController(req, res) {
    try {
      const category = req.params;
      const booksCategory = await this.booksService.getBooksByCategory(
        category.name
      );
      res.json(booksCategory);
    } catch (error) {
      console.error(error.message);
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async getBooksByAuthorController(req, res) {
    try {
      const author = req.query.name;
      console.log(author);
      const books = await this.booksService.getBooksByAuthor(author);
      res.json(books);
    } catch (error) {
      console.error(error.message);
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async addBookController(req, res) {
    try {
      const body = req.body;
      console.log(body);
      await this.booksService.addBook(body);
      res.json({ user: "sucsesful" });
    } catch (error) {
      console.error(error.message);
      res.status(400).json({
        message: error.message,
      });
    }
  }
}
export default BooksController;
