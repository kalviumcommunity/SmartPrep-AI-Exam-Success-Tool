import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import oneShotDemo from "./routes/oneShotDemo.js";


dotenv.config();
console.log("Loaded API Key?", process.env.OPENAI_API_KEY ? "Yes" : "No");


const app = express();
app.use(cors());
app.use(express.json());

// ✅ Serve static files from "public" folder
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

// Example API route
app.post("/api/prompt", async (req, res) => {
  const { type, message, input } = req.body;
  res.json({ reply: `Got a ${type} prompt: ${message} with input: ${input}` });
});

app.use("/api", oneShotDemo);

// optional simple health route
app.get("/health", (req, res) => res.json({ status: "ok" }));

console.log("API Key Loaded:", process.env.OPENAI_API_KEY);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
