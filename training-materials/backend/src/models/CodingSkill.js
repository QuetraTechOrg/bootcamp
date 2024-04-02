/*roniceyemeli
@build by https://www.linkedin.com/in/roniceyemeli/
*/
import mongoose from "mongoose";

const codingSkillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    level: {
      type: Number,
      required: true,
    },
    domain: {
      type: String,
      required: true,
      enum: ["backend, frontend", "devops"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("skills", codingSkillSchema);
