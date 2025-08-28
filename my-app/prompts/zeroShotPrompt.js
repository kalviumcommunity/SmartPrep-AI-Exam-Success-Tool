// prompts/zeroShotPrompt.js
module.exports = function (task, input) {
  return `
Perform the following task without any examples:
Task: ${task}
Input: ${input}
Answer clearly and concisely.
  `;
};
