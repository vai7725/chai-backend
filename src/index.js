import { config } from "dotenv";
import connectDB from "./db/db.js";
import { app } from "./app.js";
import { PORT } from "./constants.js";

config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`App is listening to the port - ${PORT}`)
    );
  })
  .catch((err) => {
    console.log("DB connection failed ", err);
  });
