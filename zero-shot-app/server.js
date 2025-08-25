import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
