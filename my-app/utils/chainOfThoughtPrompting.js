import fs from "fs";
import path from "path";

const submissionsFile = path.resolve("my-app", "data", "submissions.json");

// Ensure data directory exists
const dataDir = path.dirname(submissionsFile);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

export function readSubmissions() {
  if (!fs.existsSync(submissionsFile)) {
    return [];
  }
  const data = fs.readFileSync(submissionsFile, "utf-8");
  try {
    return JSON.parse(data);
  } catch (err) {
    console.error("Error parsing submissions.json:", err);
    return [];
  }
}

export function saveSubmission(submission) {
  const submissions = readSubmissions();
  submissions.push({ ...submission, submittedAt: new Date().toISOString() });
  fs.writeFileSync(submissionsFile, JSON.stringify(submissions, null, 2), "utf-8");
}
