import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/polysched";
mongoose.connect(uri);

export default mongoose.connection;
