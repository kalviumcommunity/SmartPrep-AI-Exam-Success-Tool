// Dynamic Prompting prompt template for SmartPrep – AI Exam Success Tool
export default function dynamicPromptingPrompt(conceptArea, concept, artifactUrl, explanationVideoUrl) {
  return `
You are submitting a new concept under the area: ${conceptArea}.
Concept: ${concept}

SmartPrep is an AI-powered platform designed to help students prepare effectively for exams by providing personalized study material recommendations, quiz practice, performance analytics, and smart exam timetable generation.

Please provide the following details for your dynamic prompting concept submission:
- Artifact URL: ${artifactUrl}
- Explanation Video URL: ${explanationVideoUrl}

In your explanation, describe what dynamic prompting is, how it is utilized in SmartPrep, and how it enhances the AI-powered exam preparation experience.

Evaluation Criteria:
- Correctness: Does the prompt return accurate and relevant data based on the request?
- Efficiency: How quickly and efficiently does it fetch and process the data?
- Scalability: Can the system handle increased traffic and large data sets without performance degradation?

Please provide a clear, concise, and comprehensive explanation.
  `;
}
