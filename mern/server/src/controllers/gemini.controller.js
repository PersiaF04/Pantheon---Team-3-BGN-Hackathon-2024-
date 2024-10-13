import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "../utils/env.js";

const googleAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const geminiConfig = {
  temperature: 0.9,
  topP: 1,
  topK: 1,
  maxOutputTokens: 4096,
};

const geminiModel = googleAI.getGenerativeModel({
  model: "gemini-pro",
  geminiConfig,
});

class GeminiController {
  async search(req, res) {
    try {
      const { keyword } = req.query;
      const prompt = `Tell me about a part of black history that has this search keyword: ${keyword} as part of it`;
      const result = await geminiModel.generateContent(prompt);

      return res.status(200).json({
        success: true,
        // reply: result.response.candidates[0].content.parts[0].text,
        reply: result.response.text(),
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

export default new GeminiController();
