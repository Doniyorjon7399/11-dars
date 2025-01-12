import exspress, { Router } from "express";
import Routs from "./routes/routes.js";
const app = exspress();
app.use(exspress.json());
app.use(...Routs());
app.listen(4000, () => {
  console.log("running");
});
