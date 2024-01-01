import { config } from "dotenv";
import connectDB from "./db/db.js";

config();

connectDB();
