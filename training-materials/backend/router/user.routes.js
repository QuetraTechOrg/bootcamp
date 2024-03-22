/*roniceyemeli
@build by https://www.linkedin.com/in/roniceyemeli/
*/
import express from "express";

const router = express.Router();

router.post("/user", (req, res) => {
  res.json({ message: "new user added" });
});

export default router;
