# 🧠 DSA Studies

A structured repository for practicing Data Structures and Algorithms using [LeetCode's Top Interview 150](https://leetcode.com/studyplan/top-interview-150/) study plan. Solutions are written in **TypeScript** and tested with **Vitest**.

## 📋 Study Plan

Based on the **Top Interview 150** plan — 150 problems across 23 topic sections:

| # | Topic | Problems |
|---|-------|----------|
| 1 | Array / String | 24 |
| 2 | Two Pointers | 5 |
| 3 | Sliding Window | 4 |
| 4 | Matrix | 5 |
| 5 | Hashmap | 9 |
| 6 | Intervals | 4 |
| 7 | Stack | 5 |
| 8 | Linked List | 11 |
| 9 | Binary Tree General | 14 |
| 10 | Binary Tree BFS | 4 |
| 11 | Binary Search Tree | 3 |
| 12 | Graph General | 6 |
| 13 | Graph BFS | 3 |
| 14 | Trie | 3 |
| 15 | Backtracking | 7 |
| 16 | Divide & Conquer | 4 |
| 17 | Kadane's Algorithm | 2 |
| 18 | Binary Search | 7 |
| 19 | Heap | 4 |
| 20 | Bit Manipulation | 6 |
| 21 | Math | 6 |
| 22 | 1D DP | 5 |
| 23 | Multidimensional DP | 9 |

**Difficulty breakdown:** 🟢 40 Easy · 🟡 92 Medium · 🔴 18 Hard

The full plan data is available in [`top-interview-plan/plan.json`](top-interview-plan/plan.json).

## 📊 Progress

| Section | Problems | Scaffolded | Status |
|---------|----------|------------|--------|
| Array / String | 24 | ✅ 24 | 100% |
| Two Pointers | 5 | ✅ 5 | 100% |
| Sliding Window | 4 | ✅ 4 | 100% |
| Matrix | 5 | ✅ 5 | 100% |
| Hashmap | 9 | ✅ 9 | 100% |
| Intervals | 4 | ✅ 3 | 75% |
| **Total** | **150** | **50** | **33%** |

**Last updated:** June 16, 2026 — Problems #1-50 scaffolded with folder structure and templates.

> ⚠️ **Note:** Problems #2-50 have placeholder content. To complete them:
> 1. Open each problem on LeetCode
> 2. Copy problem description to `description.md`
> 3. Extract TypeScript function signature to `index.ts`
> 4. Add test cases to `index.test.ts`
> 5. Fill in DSA concepts in `concepts.md`

## 📁 Project Structure

```
dsa-studies/
├── easy-exercises/              # Solved exercises (Array/String section)
│   ├── 2-best-time-to-buy-and-sell-stock/
│   │   ├── description.md       # Problem description
│   │   └── index.ts             # Solution(s)
│   ├── 3-rotate-array/
│   ├── 4-contains-duplicate/
│   ├── 5-single-number/
│   ├── 6-intersection-of-two-arrays-2/
│   └── extra.ts                 # Extra practice problems
├── top-interview-plan/
│   └── plan.json                # Full study plan with metadata
├── package.json
└── tsconfig.json
```

Each exercise folder contains:
- **`description.md`** — The full problem statement with examples, constraints, and follow-up questions
- **`index.ts`** — TypeScript solution with multiple approaches (initial solution → optimized), including commented-out thought processes and analysis

## 🛠️ Tech Stack

- **Language:** TypeScript 5.4+
- **Test Runner:** Vitest
- **Module System:** ESNext (bundler resolution)
- **Target:** ES2022

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## 💡 Approach

Each problem is solved with a learning-first mindset:

1. **First attempt** — Write a working solution, even if not optimal
2. **Explore alternatives** — Try different approaches (e.g., brute force → hash map → bitwise)
3. **Analyze complexity** — Comment time/space trade-offs for each approach
4. **Optimize** — Refactor toward the best solution, guided by constraints

Solutions often include commented-out earlier attempts to preserve the learning journey.

## 📄 License

This project is for personal study purposes.
