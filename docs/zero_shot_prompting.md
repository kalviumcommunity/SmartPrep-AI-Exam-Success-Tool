# Zero-Shot Prompting in SmartPrep

## What is zero-shot?
Asking the model to perform a task using only instructions (no examples).

## Where we use it
Timetable generation: we give constraints (subjects, days, hours, weak areas) and ask for a structured plan — without any sample timetables.

## Prompt used
“Generate a 7-day exam timetable for Math, Physics, Chemistry. Assume 3 hours per day.  
Prioritize weak areas: Calculus, Thermodynamics.  
Return JSON with keys {day, date, blocks[], total_hours, focus, notes} and then a 5-bullet human summary.”

## Sample output (first 2 days)
```json
[
  {
    "day": 1,
    "date": "2025-09-01",
    "blocks": [
      {"topic":"Calculus — Limits & Continuity","hours":1.5},
      {"topic":"Thermodynamics — First Law","hours":1.5}
    ],
    "total_hours": 3,
    "focus": "Weak topics",
    "notes": "End with 10 MCQs"
  },
  {
    "day": 2,
    "date": "2025-09-02",
    "blocks": [
      {"topic":"Algebra — Quadratics","hours":1},
      {"topic":"Mechanics — Kinematics","hours":1},
      {"topic":"Organic Chemistry — Basics","hours":1}
    ],
    "total_hours": 3,
    "focus": "Coverage + recall",
    "notes": "Quick review of Day 1"
  }
]
