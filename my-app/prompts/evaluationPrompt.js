// Evaluation Dataset and Testing Framework prompt template for SmartPrep – AI Exam Success Tool
export default function evaluationPrompt(conceptArea, concept, artifactUrl, explanationVideoUrl) {
  return `
You are submitting a new concept under the area: ${conceptArea}.
Concept: ${concept}

This submission focuses on implementing an evaluation pipeline with a dataset of at least 5 samples, a judge prompt to compare model output with expected results, and a testing framework to run all test cases.

Please provide the following details for your evaluation dataset and testing framework concept submission:
- Artifact URL: ${artifactUrl}
- Explanation Video URL: ${explanationVideoUrl}

In your explanation, describe the parameters considered while writing the judge prompt and how the evaluation pipeline is set up.

Evaluation Criteria:
- Correctness: Does it return the correct data based on the provided request?
- Efficiency: How quickly and efficiently does it fetch and process the data?
- Scalability: Can the API handle increased traffic and large data sets without performance degradation?

Please provide a clear, concise, and comprehensive explanation.
  `;
}
