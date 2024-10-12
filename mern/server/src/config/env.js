import dotenv from "dotenv";

dotenv.config({ path: "config.env" });

export const PORT = process.env.PORT || 8080;
