/*roniceyemeli
@build by https://www.linkedin.com/in/roniceyemeli/
*/
import express from "express";
import {
  createSkill,
  deleteSkill,
  getAllSkills,
  getSkillById,
  updateSkill,
} from "../controllers/skill.controller.js";

const router = express.Router();

router.post("/", createSkill);

router.get("/:id", getSkillById);

router.get("/", getAllSkills);

router.delete("/:id", deleteSkill);

router.put("/:id", updateSkill);

export default router;
