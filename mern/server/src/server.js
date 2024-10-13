import express from "express";
import cors from "cors";
import logger from "morgan";

import * as config from "./utils/env.js";
import "./utils/db.js";

import userRouter from "./routes/user.route.js";
import topicRouter from "./routes/topic.route.js";
import articleRouter from "./routes/article.route.js";
import videoRouter from "./routes/video.route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger("tiny"));

// health check
app.get("/", (req, res) => {
  res.json({ message: "Nuar API is live" });
});

// Mount routers
app.use("/v1/user", userRouter);
app.use("/v1/topic", topicRouter);
app.use("/v1/article", articleRouter);
app.use("/v1/video", videoRouter);

app.listen(config.PORT, () => {
  console.log(`Server listening on port ${config.PORT}`);
});
