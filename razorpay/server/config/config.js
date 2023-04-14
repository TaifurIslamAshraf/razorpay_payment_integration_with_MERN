import dotenv from "dotenv";
dotenv.config();

const dev = {
  PORT: process.env.PORT,
  KEY_SECRET: process.env.KEY_SECRET,
  KEY_ID: process.env.KEY_ID,
  DB_URI: process.env.DB_URI,
};

export default dev;
