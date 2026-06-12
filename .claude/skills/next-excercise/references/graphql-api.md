# LeetCode GraphQL API Reference (Fallback)

> **Primary method:** Browser tools (see SKILL.md Step 2). Use this GraphQL API only as a fallback if browser tools are unavailable.

## Endpoint

`https://leetcode.com/graphql`

## Authentication

Requires `LEETCODE_SESSION` cookie. Create a `.env` file in the repo root:

```
LEETCODE_SESSION=<your_cookie_value>
```

**Getting the cookie:** Open leetcode.com in browser → DevTools → Application → Cookies → Copy the value of `LEETCODE_SESSION`

The cookie expires periodically. If the API returns auth errors, get a fresh cookie.

## Query: Problem Details

```graphql
query getQuestionDetail($titleSlug: String!) {
  question(titleSlug: $titleSlug) {
    title
    titleSlug
    content
    difficulty
    topicTags {
      name
      slug
    }
    exampleTestcases
    metaData
    codeSnippets {
      lang
      langSlug
      code
    }
    hints {
      content
    }
  }
}
```

## Key Fields

| Field | Type | Description |
|-------|------|-------------|
| `content` | HTML string | Full problem description with examples and constraints in HTML |
| `difficulty` | String | `EASY`, `MEDIUM`, or `HARD` |
| `topicTags` | Array | DSA concepts/tags associated with the problem |
| `exampleTestcases` | String | Raw test case inputs (newline-separated) |
| `metaData` | JSON string | Function signature metadata (name, params, return type) |
| `codeSnippets` | Array | Starter code in various languages; filter by `langSlug: "typescript"` |
| `hints` | Array | Problem hints |

## Execution

```bash
# Read session cookie from .env
source .env 2>/dev/null || true

curl -s 'https://leetcode.com/graphql' \
  -H 'Content-Type: application/json' \
  -H "Cookie: LEETCODE_SESSION=${LEETCODE_SESSION}" \
  -d '{"query":"query getQuestionDetail($titleSlug: String!) { question(titleSlug: $titleSlug) { title titleSlug content difficulty topicTags { name slug } exampleTestcases metaData codeSnippets { lang langSlug code } hints { content } } }","variables":{"titleSlug":"<SLUG>"}}'
```

## Fallback: Browser Scraping

If the GraphQL API fails or returns incomplete data:

1. Open `https://leetcode.com/problems/<slug>/` using `open_browser_page`
2. Use `read_page` to get the problem description
3. Extract content from the page's `__NEXT_DATA__` script tag (contains structured JSON)