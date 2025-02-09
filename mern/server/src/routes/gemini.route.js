import express from "express";

import GeminiController from "../controllers/gemini.controller.js";

const router = express.Router();

router.get("/search", GeminiController.search);
router.post("/chat", GeminiController.chat);

export default router;
