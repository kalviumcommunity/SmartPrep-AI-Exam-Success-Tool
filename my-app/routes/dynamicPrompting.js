import express from "express";

const router = express.Router();

// POST /api/dynamic-prompting
router.post("/dynamic-prompting", (req, res) => {
  const { conceptArea, concept, artifactUrl, explanationVideoUrl } = req.body;

  if (!conceptArea || !concept || !artifactUrl || !explanationVideoUrl) {
    return res.status(400).json({ error: "All fields are required: conceptArea, concept, artifactUrl, explanationVideoUrl" });
  }

  // For now, just log the submission and respond success
  console.log("New Dynamic Prompting Submission:", { conceptArea, concept, artifactUrl, explanationVideoUrl });

  // TODO: Save submission to DB or process as needed

  res.json({ message: "Dynamic prompting submission received successfully", data: { conceptArea, concept, artifactUrl, explanationVideoUrl } });
});

export default router;
