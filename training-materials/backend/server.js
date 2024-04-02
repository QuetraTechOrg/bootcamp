import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
// import connectDB from "./config/database.js";
import userRoutes from "./src/router/user.routes.js";
import skillRoutes from "./src/router/skill.routes.js";
import database from "./config/database.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
const port = 3000;

app.use("/user", userRoutes);
app.use("/skill", skillRoutes);

database();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
