import Skill from "../models/Skill.js";

//CREATE
export const createSkill = async (req, res) => {
  try {
    const data = req.body;
    const newSkill = {
      name: data.name,
      domain: data.domain,
      description: data.description,
      icon: data.icon,
    };

    const skill = new Skill({ ...newSkill });
    await skill.save();

    res.status(200).json({ message: "Nouveau skill crée", data: newSkill });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//READ
export const getSkillById = async (req, res) => {
  try {
    const { id } = req.params;

    const skill = await Skill.findById({ _id: id });

    if (!skill) {
      res.status(400).json({ message: "Skill not found" });
    }

    res.status(200).json({ message: "skill récupéré", data: skill });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ ALL
export const getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.status(200).json({ message: "skills recupéré", data: skills });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteSkill = async (req, res) => {
  try {
    const { id } = req.params;

    const skill = await Skill.findById(id);

    if (!skill) {
      res.status(400).json({ message: "Skill not found" });
    }

    await Skill.findByIdAndDelete(id);
    res.status(200).json({ message: "skill supprimé" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const newUpdatedSkill = await Skill.findByIdAndUpdate(
      id,
      { ...data },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "skill mis à jour", data: newUpdatedSkill });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
