#!/usr/bin/env python3
"""Fetch a LeetCode problem's data via GraphQL API.

Usage: python fetch-problem.py <slug>

Requires LEETCODE_SESSION in .env file at repo root.
"""

import json
import os
import sys
from urllib.request import Request, urlopen


def load_session_cookie() -> str:
    """Load LEETCODE_SESSION from .env file."""
    env_path = os.path.join(os.getcwd(), ".env")
    session = os.environ.get("LEETCODE_SESSION", "")

    if not session and os.path.exists(env_path):
        with open(env_path) as f:
            for line in f:
                line = line.strip()
                if line.startswith("LEETCODE_SESSION="):
                    session = line.split("=", 1)[1].strip()
                    break

    if not session:
        print("Error: LEETCODE_SESSION not set. Add it to .env file.", file=sys.stderr)
        sys.exit(1)

    return session


QUERY = """
query getQuestionDetail($titleSlug: String!) {
  question(titleSlug: $titleSlug) {
    title
    titleSlug
    content
    difficulty
    topicTags { name slug }
    exampleTestcases
    metaData
    codeSnippets { lang langSlug code }
    hints { content }
  }
}
"""


def fetch_problem(slug: str) -> dict:
    """Fetch problem data from LeetCode GraphQL API."""
    session = load_session_cookie()

    payload = json.dumps({
        "query": QUERY,
        "variables": {"titleSlug": slug},
    }).encode()

    req = Request(
        "https://leetcode.com/graphql",
        data=payload,
        headers={
            "Content-Type": "application/json",
            "Cookie": f"LEETCODE_SESSION={session}",
        },
    )

    with urlopen(req) as resp:
        data = json.loads(resp.read())

    if "errors" in data:
        print(f"GraphQL errors: {json.dumps(data['errors'], indent=2)}", file=sys.stderr)
        sys.exit(1)

    return data.get("data", {}).get("question")


def main():
    if len(sys.argv) < 2:
        print("Usage: python fetch-problem.py <slug>", file=sys.stderr)
        sys.exit(1)

    slug = sys.argv[1]
    result = fetch_problem(slug)

    if not result:
        print(f"Problem '{slug}' not found.", file=sys.stderr)
        sys.exit(1)

    print(json.dumps(result, indent=2))


if __name__ == "__main__":
    main()
