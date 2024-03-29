import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
// import connectDB from "./config/database.js";
import userRoutes from "./src/router/user.routes.js";
import database from "./config/database.js";

const app = express();

app.use(express.json());
const port = 3000;

app.use("/user", userRoutes);

database();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
