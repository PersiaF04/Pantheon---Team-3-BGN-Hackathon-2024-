import express from "express";
import cors from "cors";
import logger from "morgan";

import * as config from "./utils/env.js";
import "./utils/db.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger("tiny"));

app.listen(config.PORT, () => {
  console.log(`Server listening on port ${config.PORT}`);
});
