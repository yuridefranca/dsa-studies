---
name: next-exercise
description: Fetch the next LeetCode Top Interview 150 exercise and scaffold the problem folder with description, solution template, test file, and DSA concepts. Use when the user asks for the next exercise, next problem, next leetcode, or provides a LeetCode problem URL.
---

# Next Exercise Skill

Fetch and scaffold the next LeetCode problem from the Top Interview 150 study plan.

## Triggers

- User says "next exercise", "next problem", "next leetcode", "give me the next one"
- User provides a LeetCode URL like `https://leetcode.com/problems/two-sum/`

## Prerequisites

- `plan.json` at `top-interview-plan/plan.json`
- `vitest` and `typescript` installed

## Workflow

### Step 1: Determine which problem to fetch

**If user provided a URL:** Extract the slug, find it in `plan.json` to get section and order.

**If user said "next":**

1. Read `top-interview-plan/plan.json`
2. Scan existing folders under `top-interview-plan/` — pattern: `{order}-{slug}`
3. Find the first problem in `plan.json` without a corresponding folder
4. That's the next problem

### Step 2: Fetch problem data via browser

Use the agent's built-in browser tools — no external scripts or cookies needed.

1. Open the problem page: `open_browser_page` with `https://leetcode.com/problems/{slug}/`
2. Extract structured data from the page's `__NEXT_DATA__` using `run_playwright_code`:

```javascript
return page.evaluate(() => {
  const nextData = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
  const question = nextData.props.pageProps.dehydratedState.queries
    .find(q => q.state.data?.question)?.state.data?.question;
  if (!question) return { error: 'question not found in __NEXT_DATA__' };
  return {
    title: question.title,
    slug: question.titleSlug,
    content: question.content,
    difficulty: question.difficulty,
    topicTags: question.topicTags?.map(t => ({ name: t.name, slug: t.slug })),
    exampleTestcases: question.exampleTestcases,
    metaData: question.metaData,
    codeSnippets: question.codeSnippets?.map(s => ({ lang: s.lang, langSlug: s.langSlug, code: s.code })),
    hints: question.hints?.map(h => h.content)
  };
});
```

3. If `__NEXT_DATA__` doesn't contain the question, fall back to scraping the visible page with `read_page`

See [graphql-api.md](./references/graphql-api.md) for the GraphQL API fallback (requires `.env` cookie).

### Step 3: Create folder structure

```
top-interview-plan/
  {section-order:02d}-{section-slug}/     e.g., 01-array-string/
    {problem-order}-{problem-slug}/       e.g., 1-merge-sorted-array/
      description.md
      concepts.md
      index.ts
      index.test.ts
```

- Section: `{order padded to 2 digits}-{kebab-case name}` → `01-array-string/`
- Problem: `{global order}-{slug}` → `1-merge-sorted-array/`
- Order numbers are global (1-150), NOT per-section

### Step 4: Write `description.md`

Use template [description.md](./assets/description.md). Convert HTML `content` from the fetched data to Markdown following rules in [html-to-markdown.md](./references/html-to-markdown.md).

### Step 5: Write `index.ts`

Use template [index.ts](./assets/index.ts).

**Determine function signature from:**

1. `codeSnippets` — filter for `langSlug: "typescript"`, parse function name/params/return
2. `metaData` — JSON with function signature metadata
3. Fallback: `export function solve(...args: unknown[]): unknown`

### Step 6: Write `index.test.ts`

Use template [index.test.ts](./assets/index.test.ts).

**Extract test cases from:**

1. Problem description examples (primary)
2. `exampleTestcases` field (supplementary)
3. `metaData` JSON for input/output structure

### Step 7: Write `concepts.md`

Use template [concepts.md](./assets/concepts.md).

- Merge `topicTags` from `plan.json` and fetched data (deduplicate)
- For each tag: definition, relevance to this problem, 3 real-world applications
- Order by relevance (most relevant first)

### Step 8: Verify

1. Run `npx vitest run top-interview-plan/{section}/{problem}/` — tests should fail (empty solution) but file must parse
2. Report: title, difficulty, section, concepts, file paths, progress (X/150)

## Important Notes

- **Don't overwrite** existing problem folders — ask the user first
- **Browser session** — the user must be logged into LeetCode in the browser for the page to load properly
