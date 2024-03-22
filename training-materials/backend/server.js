import express from "express";
import connectDB from "./config/connectDB.js";
import userRoutes from "./router/user.routes.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/user", userRoutes);
connectDB();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
