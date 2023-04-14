import mongoose from "mongoose";
import dev from "./config.js";

export const connectDB = async () => {
  const { connection } = await mongoose.connect(dev.DB_URI);
  console.log(`Mongodb is connect at ${connection.host}`);
};
