#!/usr/bin/env python3
"""
Quick script to check progress and find the next exercise.
Usage: python3 next-exercise-check.py [--next] [--summary]
"""

import json
import sys
from pathlib import Path

PLAN_FILE = Path('top-interview-plan/plan.json')

# Load plan
with open(PLAN_FILE, 'r') as f:
    plan = json.load(f)

# Count completed
total = 0
completed_count = 0
next_problem = None

for section in plan['sections']:
    for question in section['questions']:
        total += 1
        if question.get('completed', False):
            completed_count += 1
        elif next_problem is None:
            next_problem = {
                'order': question['order'],
                'title': question['title'],
                'slug': question['slug'],
                'difficulty': question['difficulty'],
                'section': section['name'],
                'section_slug': section['slug']
            }

# Parse arguments
show_next = '--next' in sys.argv
show_summary = '--summary' in sys.argv

if not show_next and not show_summary:
    # Default: show both
    show_next = True
    show_summary = True

if show_summary:
    print(f"📊 Progress: {completed_count}/{total} ({completed_count*100//total}%)")
    print(f"   Completed: {completed_count}")
    print(f"   Remaining: {total - completed_count}")
    print()

if show_next:
    if next_problem:
        print(f"🎯 NEXT EXERCISE:")
        print(f"   #{next_problem['order']}: {next_problem['title']}")
        print(f"   Difficulty: {next_problem['difficulty']}")
        print(f"   Section: {next_problem['section']}")
        print(f"   Slug: {next_problem['slug']}")
        print(f"   URL: https://leetcode.com/problems/{next_problem['slug']}/")
        print()
        print(f"   To scaffold: say 'next exercise' or run the scaffold script")
    else:
        print("🎉 All problems completed!")
        print()
