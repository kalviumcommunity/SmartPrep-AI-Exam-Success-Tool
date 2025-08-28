import dotenv from "dotenv";
dotenv.config();

import express from "express";
import OpenAI from "openai";

const router = express.Router();
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


// single example (assistant JSON) used as the one-shot example
const exampleUser = `Generate a 3-day study timetable for subjects: Math (Algebra), Physics (Mechanics). 2 hours/day. Weak: Algebra.`;
const exampleAssistant = `{
 "days": 3,
 "timetable": [
  {"day":1,"date":"2025-09-01","blocks":[{"topic":"Algebra - Quadratic Equations","hours":1},{"topic":"Mechanics - Kinematics","hours":1}],"total_hours":2,"focus":"Algebra"},
  {"day":2,"date":"2025-09-02","blocks":[{"topic":"Algebra - Practice problems","hours":1},{"topic":"Mechanics - Dynamics","hours":1}],"total_hours":2,"focus":"Practice"},
  {"day":3,"date":"2025-09-03","blocks":[{"topic":"Algebra - Revision","hours":1},{"topic":"Mechanics - Problems","hours":1}],"total_hours":2,"focus":"Mixed"}
 ]
}`;

router.post("/one-shot-timetable", async (req, res) => {
  try {
    const { subjects, days, hoursPerDay, weakAreas } = req.body;
    if (!subjects || !days || !hoursPerDay) {
      return res.status(400).json({ error: "subjects, days, hoursPerDay are required" });
    }

    // Build one-shot messages: system, example user, example assistant, new user
    const system = `You are SmartPrep, an AI exam coach. Return JSON-first following the schema described in the example, then a short human summary.`;

    const userExample = `Example request: ${exampleUser}`;
    const assistantExample = `Example output (JSON): ${exampleAssistant}`;

    const newRequest = `Generate a ${days}-day study timetable for subjects: ${subjects.join(", ")}. ${hoursPerDay} hours/day. Weak areas: ${weakAreas ? weakAreas.join(", ") : "none"}.
Return JSON array of objects with keys: {day, date, blocks[], total_hours, focus, notes} then a 5-bullet human summary.`;

    const messages = [
      { role: "system", content: system },
      { role: "user", content: userExample },
      { role: "assistant", content: assistantExample },
      { role: "user", content: newRequest }
    ];

    // call OpenAI Chat Completion
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages
    });

    const reply = completion.choices?.[0]?.message?.content ?? "No response";
    res.json({ promptUsed: newRequest, reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

router.get("/", (req, res) => {
  res.json({ message: "One-shot demo API is working!" });
});

export default router;