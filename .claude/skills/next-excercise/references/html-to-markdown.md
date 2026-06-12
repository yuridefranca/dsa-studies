# HTML to Markdown Conversion Rules

When converting the `content` field from the LeetCode GraphQL API (which returns HTML) to Markdown for `description.md`:

| HTML | Markdown |
|------|----------|
| `<p>` | Paragraph with blank line |
| `<code>` | Inline code with backticks |
| `<pre><code>` | Fenced code block (` ``` `) |
| `<strong>` / `<b>` | `**bold**` |
| `<em>` / `<i>` | `*italic*` |
| `<ul>` | List items with `-` |
| `<ol>` | List items with `1.` |
| `<sup>` | `^{content}` (e.g., 10^4) |
| `<sub>` | `_{content}` |
| All other tags | Strip the tag, keep the text |

## Special Handling

- **Math notation**: LeetCode uses `<sup>` for exponents (e.g., `<sup>4</sup>` → `^4`). Convert these properly.
- **Nested code blocks**: `<pre><code>` may contain language hints. Use fenced blocks without language specifier unless obvious.
- **Line breaks**: `<br>` → hard line break (two spaces + newline) or just a blank line depending on context.
- **Links**: `<a href="...">text</a>` → `[text](url)` — preserve links when they reference relevant resources.