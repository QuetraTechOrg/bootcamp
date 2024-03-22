import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("database connected....");
  } catch (error) {
    console.error("error connecting to the database");
  }
};

export default connectDB;
