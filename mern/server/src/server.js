import express from "express";
import cors from "cors";
import logger from "morgan";

import * as config from "./config/env.js";
import "./config/db.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger("tiny"));

// start the Express server
app.listen(config.PORT, () => {
  console.log(`Server listening on port ${config.PORT}`);
});
