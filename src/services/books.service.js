import Io from "../utils/io.js";
class BooksService {
  constructor() {
    this.io = new Io();
  }
  async getAllBooks() {
    const books = await this.io.readfile("data.json");
    return books;
  }
  async getBooksByCategory(categoryName) {
    const booksFindCategory = await this.io.readfile("data.json");

    const category = booksFindCategory.filter(
      (item) => item.category === categoryName
    );
    if (category) {
      return category;
    } else {
      throw new Error("book not found");
    }
  }
  async getBooksByAuthor(Author) {
    const books = await this.io.readfile("data.json");
    const booksFindAuthor = books.find((book) => book.author === Author);
    if (booksFindAuthor) {
      return booksFindAuthor;
    }
    throw new Error("book not found");
  }
  async addBook(newBook) {
    const books = await this.io.readfile("data.json");
    const booksFind = books.find((book) => book.id == newBook.id);
    if (!booksFind) {
      books.push(newBook);
      await this.io.writeFile("data.json", books);
    } else {
      throw new Error("book al redy added");
    }
  }
}
export default BooksService;
