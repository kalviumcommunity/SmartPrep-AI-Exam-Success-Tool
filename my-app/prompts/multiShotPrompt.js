export default function multiShotPrompt(task, input) {
  return `
Perform the following task with multiple examples:
Task: ${task}

Example 1:
User: Generate a 3-day study timetable for subjects: Math (Algebra), Physics (Mechanics). 2 hours/day. Weak: Algebra.
Assistant:
{
 "days": 3,
 "timetable": [
  {"day":1,"date":"2025-09-01","blocks":[{"topic":"Algebra - Quadratic Equations","hours":1},{"topic":"Mechanics - Kinematics","hours":1}],"total_hours":2,"focus":"Algebra"},
  {"day":2,"date":"2025-09-02","blocks":[{"topic":"Algebra - Practice problems","hours":1},{"topic":"Mechanics - Dynamics","hours":1}],"total_hours":2,"focus":"Practice"},
  {"day":3,"date":"2025-09-03","blocks":[{"topic":"Algebra - Revision","hours":1},{"topic":"Mechanics - Problems","hours":1}],"total_hours":2,"focus":"Mixed"}
 ]
}

Example 2:
User: Generate a 5-day study timetable for subjects: Math (Calculus, Algebra), Physics (Thermodynamics). 3 hours/day. Weak areas: Calculus, Thermodynamics.
Assistant:
{
 "days": 5,
 "timetable": [
  {"day":1,"date":"2025-09-01","blocks":[{"topic":"Calculus - Limits","hours":1.5},{"topic":"Thermodynamics - Basic Laws","hours":1.5}],"total_hours":3,"focus":"Weak topics","notes":"End with 10 MCQs"},
  {"day":2,"date":"2025-09-02","blocks":[{"topic":"Algebra - Quadratics","hours":1},{"topic":"Mechanics - Kinematics","hours":1},{"topic":"Organic Chemistry - Basics","hours":1}],"total_hours":3,"focus":"Coverage + recall","notes":"Quick review of Day 1"},
  {"day":3,"date":"2025-09-03","blocks":[{"topic":"Calculus - Practice","hours":1.5},{"topic":"Thermodynamics - Problems","hours":1.5}],"total_hours":3,"focus":"Practice","notes":"Focus on weak areas"},
  {"day":4,"date":"2025-09-04","blocks":[{"topic":"Algebra - Revision","hours":1.5},{"topic":"Physics - Thermodynamics","hours":1.5}],"total_hours":3,"focus":"Mixed","notes":"Mixed topics"},
  {"day":5,"date":"2025-09-05","blocks":[{"topic":"Calculus - Advanced","hours":1.5},{"topic":"Physics - Review","hours":1.5}],"total_hours":3,"focus":"Review","notes":"Final revision"}
 ]
}

Now, please generate a ${task} for the following input:
${input}

Answer clearly and concisely.
  `;
};
