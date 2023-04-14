import Razorpay from "razorpay";

import app from "./app.js";
import dev from "./config/config.js";
import { connectDB } from "./config/database.js";

connectDB();

export const instance = new Razorpay({
  key_id: dev.KEY_ID,
  key_secret: dev.KEY_SECRET,
});

app.listen(dev.PORT, () => {
  console.log(`Server is running at http://localhost:${dev.PORT}`);
});
