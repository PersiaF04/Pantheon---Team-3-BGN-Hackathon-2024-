import mongoose from "mongoose";
import * as config from "./env.js";

mongoose
  .connect(config.MONGO_URI, {
    retryWrites: true,
    w: "majority",
    dbName: config.MONGO_DB_NAME,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB");
    console.log(`DataSource: ${mongoose.connections[0].host}`);
  })
  .catch((err) => console.log(err));
