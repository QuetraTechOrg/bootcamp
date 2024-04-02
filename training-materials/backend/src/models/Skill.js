/*roniceyemeli
@build by https://www.linkedin.com/in/roniceyemeli/
*/
import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    domain: {
      type: String,
      required: true,
      enum: ["backend", "frontend", "devops"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Skills", skillSchema);
