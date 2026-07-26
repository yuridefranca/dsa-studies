---
name: dsa-recap
description: Generate a comprehensive recap of the problem-solving thinking process and DSA concepts for completed exercises. Use when: student has solved one or more problems and wants to consolidate learning, prepare for interviews, or build problem-solving intuition.
---

# DSA Exercise Recap Skill

Generate structured recaps that capture the **thinking process**, **decision points**, and **DSA concepts** used to solve LeetCode exercises. This skill helps students consolidate learning and build interview-ready problem-solving intuition.

## When to Use

- Student has completed one or more exercises (tests passing)
- After optimizing a solution and wanting to capture learnings
- Before an interview to review problem-solving patterns
- When building a personal knowledge base of DSA patterns

## Input Requirements

Student provides:
- Path(s) to exercise folder(s): `top-interview-plan/{section}/{order}-{slug}/`
- Optionally: specific focus areas or concerns

## Workflow

### Step 1: Gather Context

For each exercise:

1. **Read the problem**: `description.md`
2. **Read the concepts**: `concepts.md` (if exists)
3. **Read the solution**: `index.ts` (final version)
4. **Read the tests**: `index.test.ts`
5. **Run tests**: Confirm solution passes all tests

### Step 2: Analyze the Solution

Evaluate across these dimensions:

| Dimension | Questions to Answer |
|-----------|---------------------|
| **Problem Understanding** | What was the core challenge? What constraints mattered most? |
| **Initial Approach** | What was the first instinct? Why? |
| **Technique Selection** | Which DSA technique was chosen? (two pointers, hash map, etc.) |
| **Optimization Journey** | Were there iterations? What prompted each optimization? |
| **Complexity Analysis** | What is the final time/space complexity? Is it optimal? |
| **Alternative Approaches** | What other techniques could work? Why were they not chosen? |
| **Key Insights** | What "aha!" moments occurred? |
| **Common Pitfalls** | What mistakes are easy to make here? |

### Step 3: Generate Recap Structure

Create a `RECAP.md` file in the exercise folder with this structure:

```markdown
# Recap: {Problem Title}

**Problem:** [{slug}](https://leetcode.com/problems/{slug}/)  
**Difficulty:** {EASY|MEDIUM|HARD}  
**Section:** {section name}  
**Date Completed:** {date}  
**Techniques Used:** {list of DSA techniques}

---

## 🎯 Problem Essence

{2-3 sentences capturing the CORE challenge - what made this problem tricky?}

**Key Constraint:** {the one constraint that drove the solution design}

---

## 🧠 Thinking Process

### Initial Understanding
{How did you first interpret the problem? What was your gut instinct?}

### Approach Exploration
{What approaches did you consider? Why did you reject some?}

### Breakthrough Moment
{What insight led to the working solution?}

### Optimization Path (if applicable)
{What did you optimize? What prompted each iteration?}

---

## 💻 Solution Analysis

### Final Approach
{Name the technique: "Two Pointers from the End", "Sliding Window", etc.}

**Why This Works:**
- {reason 1}
- {reason 2}

### Complexity
- **Time:** O({}) - {explanation of why}
- **Space:** O({}) - {explanation of why}

**Is This Optimal?** {Yes/No, and why}

---

## 🔄 Alternative Approaches Considered

| Approach | Technique | Time | Space | Why Not Chosen |
|----------|-----------|------|-------|----------------|
| {name} | {technique} | O() | O() | {reason} |
| {name} | {technique} | O() | O() | {reason} |

---

## ⚠️ Common Pitfalls

1. **{Pitfall name}**: {description of the mistake and why it's tempting}
   - **How to avoid:** {specific tip}

2. **{Pitfall name}**: {description}
   - **How to avoid:** {tip}

---

## 🔑 Key Insights

> 💡 **Insight 1:** {transferable lesson - e.g., "Working backwards avoids overwriting data"}

> 💡 **Insight 2:** {another lesson - e.g., "When merging sorted arrays, compare from the ends"}

---

## 📚 Pattern Recognition

**This problem is an example of:** {pattern name, e.g., "Two Pointers - Converging from Ends"}

**Similar problems:** {list 2-3 other problems with same pattern}

**When to use this pattern:**
- {trigger condition 1}
- {trigger condition 2}

---

## 🎤 Interview Talking Points

If asked this in an interview, here's what to communicate:

1. **Start with:** "I notice this involves {pattern}. The key constraint is {constraint}."

2. **Explain your approach:** "I'll use {technique} because {reason}. This gives us O(time) time."

3. **Mention trade-offs:** "An alternative would be {other approach}, but that uses O(space) extra space."

4. **Walk through:** "Let me trace through Example 1 to show how the pointers move..."

---

## 🤔 Reflection Questions

- What was the hardest part of this problem?
- What would you do differently if you saw this fresh in an interview?
- How would you adapt this solution if {constraint changed}?
- What similar problem could you solve now with this pattern?

---

## 📝 Notes

{Any additional observations, tricks, or personal reminders}
```

### Step 4: Fill the Recap

For each section:

1. **Extract from conversation**: If there was dialogue about the problem, capture the thinking process
2. **Analyze the code**: Look at the final solution to understand the technique
3. **Reference concepts**: Use `concepts.md` for DSA terminology
4. **Be specific**: Avoid vague statements - cite specific code decisions

### Step 5: Quality Check

Before finalizing, verify:

- [ ] Recap captures the **journey**, not just the destination
- [ ] Complexity analysis is **accurate** and **explained**
- [ ] Alternative approaches are **realistic** (not strawmen)
- [ ] Pitfalls are **specific** to this problem type
- [ ] Key insights are **transferable** to other problems
- [ ] Interview talking points are **actionable**
- [ ] Language is **clear** and **concise** (future-you should understand this)

## Output

**Primary:** `RECAP.md` file in the exercise folder

**Optional:** Summary in chat with key takeaways

## Example Prompts

- "Generate a recap for top-interview-plan/01-array-string/1-merge-sorted-array/"
- "Create recaps for all problems I've solved in the array-string section"
- "Recap my thinking process for the merge sorted array problem, focusing on optimization decisions"
- "Generate a recap comparing my approaches for problems 1-5"

## Tips for Effective Recaps

1. **Write soon after solving** - Capture the thinking while it's fresh
2. **Be honest about struggles** - Document where you got stuck; that's where learning happened
3. **Focus on transferable insights** - What applies to OTHER problems?
4. **Use your own words** - Don't copy from solutions; explain it to yourself
5. **Review before interviews** - These recaps are your personal problem-solving playbook

## Related Customizations

- **`.instructions.md`** - Add interview prep preferences (e.g., "always analyze complexity before coding")
- **`review-solution.agent.md`** - Customize how solutions are reviewed before recap generation
- **`dsa-teacher.agent.md`** - Adjust teaching style for future problem-solving sessions

---

**Skill Version:** 1.0  
**Created:** July 26, 2026  
**Based on:** Conversation pattern from merge-sorted-array optimization discussion
