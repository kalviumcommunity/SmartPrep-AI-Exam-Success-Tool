# One-Shot Prompting — SmartPrep

**One-shot prompting** = you give the model a single example + an instruction, and it uses that example as the pattern to follow.

## Example use-case in SmartPrep
We use one-shot prompting to generate structured output (JSON timetable) by showing the model one example timetable, then asking it to produce a new one for the user's inputs.

## System prompt (role)
You are SmartPrep, an AI exam coach. Be concise, accurate and return JSON-first following the requested schema, then a short human summary.

## One-Shot Prompt (structure)

**Example (single example)**  
User (example):
```

Generate a 3-day study timetable for subjects: Math (Algebra), Physics (Mechanics). 2 hours/day. Weak: Algebra.

````
Assistant (example output - JSON):
```json
{
 "days": 3,
 "timetable": [
  {"day":1,"date":"2025-09-01","blocks":[{"topic":"Algebra - Quadratic Equations","hours":1},{"topic":"Mechanics - Kinematics","hours":1}],"total_hours":2,"focus":"Algebra"},
  {"day":2,"date":"2025-09-02","blocks":[{"topic":"Algebra - Practice problems","hours":1},{"topic":"Mechanics - Dynamics","hours":1}],"total_hours":2,"focus":"Practice"},
  {"day":3,"date":"2025-09-03","blocks":[{"topic":"Algebra - Revision","hours":1},{"topic":"Mechanics - Problems","hours":1}],"total_hours":2,"focus":"Mixed"}
 ]
}
````

**Now the actual user request (one-shot)**

```
Generate a 5-day study timetable for subjects: Math (Calculus, Algebra), Physics (Thermodynamics). 3 hours/day. Weak areas: Calculus, Thermodynamics.
Return JSON with keys: {day, date, blocks[], total_hours, focus, notes} then a 5-bullet human summary.
```

## Why one-shot here?

* The single example teaches the model the exact JSON schema & style to follow.
* The new request must produce same structure but with the new constraints.

## Sample output (truncated)

```json
[
  {"day":1,"date":"2025-09-01","blocks":[{"topic":"Calculus - Limits","hours":1.5},{"topic":"Thermodynamics - Basic Laws","hours":1.5}],"total_hours":3,"focus":"Weak topics","notes":"End with 10 MCQs"},
  ...
]
```
