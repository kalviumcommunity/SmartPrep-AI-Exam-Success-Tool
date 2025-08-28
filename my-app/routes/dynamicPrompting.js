import express from "express";
import { saveSubmission } from "../utils/chainOfThoughtPrompting.js";
import dynamicPromptingPrompt from "../prompts/dynamicPrompting.js";
import tokensPrompt from "../prompts/tokensPrompt.js";
import evaluationPrompt from "../prompts/evaluationPrompt.js";

const router = express.Router();

// POST /api/dynamic-prompting
router.post("/dynamic-prompting", (req, res) => {
  const { conceptArea, concept, artifactUrl, explanationVideoUrl } = req.body;

  if (!conceptArea || !concept || !artifactUrl || !explanationVideoUrl) {
    return res.status(400).json({ error: "All fields are required: conceptArea, concept, artifactUrl, explanationVideoUrl" });
  }

  // Save submission to JSON file
  try {
    saveSubmission({ conceptArea, concept, artifactUrl, explanationVideoUrl });
  } catch (err) {
    console.error("Error saving submission:", err);
    return res.status(500).json({ error: "Failed to save submission" });
  }

  console.log("New Dynamic Prompting Submission:", { conceptArea, concept, artifactUrl, explanationVideoUrl });

  // Use specific prompt template for known concepts
  let prompt;
  if (concept === "Tokens and tokenization") {
    prompt = tokensPrompt(conceptArea, concept, artifactUrl, explanationVideoUrl);
  } else if (concept === "Evaluation Dataset and Testing Framework") {
    prompt = evaluationPrompt(conceptArea, concept, artifactUrl, explanationVideoUrl);
  } else {
    prompt = dynamicPromptingPrompt(conceptArea, concept, artifactUrl, explanationVideoUrl);
  }

  res.json({ message: "Dynamic prompting submission received successfully", data: { conceptArea, concept, artifactUrl, explanationVideoUrl }, prompt });
});

export default router;
