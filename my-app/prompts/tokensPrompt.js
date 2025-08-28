// Tokens and tokenization prompt template for SmartPrep – AI Exam Success Tool - GenAI
export default function tokensPrompt(conceptArea, concept, artifactUrl, explanationVideoUrl) {
  return `
You are submitting a new concept under the area: ${conceptArea}.
Concept: ${concept}

This submission focuses on tokens and tokenization in AI models.

Please provide the following details for your tokens and tokenization concept submission:
- Artifact URL: ${artifactUrl}
- Explanation Video URL: ${explanationVideoUrl}

In your explanation, describe what tokens are, how tokenization works in AI language models, and why understanding tokens is important for efficient AI usage.

Evaluation Criteria:
- Correctness: Does the explanation accurately describe tokens and tokenization?
- Efficiency: How well does the system log and utilize token counts?
- Scalability: Can the system handle tokenization efficiently at scale?

Please provide a clear, concise, and comprehensive explanation.
  `;
}
