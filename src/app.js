import express from "express";
const products = [
  { id: 1, name: "iPhone 13", price: 999, category: "phone" },
  { id: 2, name: "MacBook Pro", price: 1299, category: "laptop" },
  { id: 3, name: "iPad Air", price: 599, category: "tablet" },
  { id: 4, name: "Samsung S21", price: 899, category: "phone" },
  { id: 5, name: "Dell XPS", price: 1199, category: "laptop" },
];
const app = express();
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const userId = products.find((user) => user.id == req.params.id);
  res.json(userId);
});
app.get("/api/products/category/:name", (req, res) => {
  const userId = products.filter((user) => user.category === req.params.name);
  res.json(userId);
});
app.post("/api/products/search", (req, res) => {
  console.log(req.query);
  const userId = products.filter((user) => user.category === req.query.q);
  res.json(userId);
});
app.listen(4000, () => {
  console.log("server running", 4000);
});
