import dotenv from "dotenv";
dotenv.config();

import express from "express";
import OpenAI from "openai";

const router = express.Router();
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

import multiShotPrompt from "../prompts/multiShotPrompt.js";

router.post("/multi-shot-timetable", async (req, res) => {
  try {
    const { subjects, days, hoursPerDay, weakAreas } = req.body;
    if (!subjects || !days || !hoursPerDay) {
      return res.status(400).json({ error: "subjects, days, hoursPerDay are required" });
    }

    const task = "Generate a study timetable";
    const input = `subjects: ${subjects.join(", ")}, days: ${days}, hours per day: ${hoursPerDay}, weak areas: ${weakAreas ? weakAreas.join(", ") : "none"}`;

    const prompt = multiShotPrompt(task, input);

    const messages = [
      { role: "system", content: "You are SmartPrep, an AI exam coach. Return JSON-first following the schema described in the examples, then a short human summary." },
      { role: "user", content: prompt }
    ];

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages
    });

    const reply = completion.choices?.[0]?.message?.content ?? "No response";
    res.json({ promptUsed: prompt, reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

router.get("/", (req, res) => {
  res.json({ message: "Multi-shot demo API is working!" });
});

export default router;
