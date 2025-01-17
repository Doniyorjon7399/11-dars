import express from "express";
import "dotenv/config";
import Routes from "./routes/routes.js";
const app = express();
app.use(express.json());
app.use("/api", ...Routes());
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("service is running ", PORT);
});
