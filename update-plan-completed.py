#!/usr/bin/env python3
"""
Update plan.json with 'completed' field based on existing problem folders.
"""

import json
from pathlib import Path

PLAN_FILE = Path('top-interview-plan/plan.json')

# Load plan
with open(PLAN_FILE, 'r') as f:
    plan = json.load(f)

# Get all existing problem folders
completed_orders = set()
for section_dir in Path('top-interview-plan').glob('??-*'):
    for problem_dir in section_dir.iterdir():
        if problem_dir.is_dir() and problem_dir.name[0].isdigit():
            # Extract order number from folder name (e.g., '1-merge-sorted-array' -> 1)
            try:
                order = int(problem_dir.name.split('-')[0])
                completed_orders.add(order)
                print(f"✅ Found folder for problem #{order}: {problem_dir.name}")
            except ValueError:
                pass

print(f"\n📊 Total completed: {len(completed_orders)} problems")
print(f"   Completed orders: {sorted(completed_orders)}\n")

# Update plan.json with 'completed' field
for section in plan['sections']:
    for question in section['questions']:
        question['completed'] = question['order'] in completed_orders

# Save updated plan
with open(PLAN_FILE, 'w') as f:
    json.dump(plan, f, indent=2)

print(f"✅ Updated {PLAN_FILE} with 'completed' field")

# Find next unsolved
next_problem = None
for section in plan['sections']:
    for question in section['questions']:
        if not question['completed']:
            next_problem = {
                'order': question['order'],
                'title': question['title'],
                'slug': question['slug'],
                'difficulty': question['difficulty'],
                'section': section['name']
            }
            break

if next_problem:
    print(f"\n🎯 NEXT EXERCISE:")
    print(f"   #{next_problem['order']}: {next_problem['title']}")
    print(f"   Difficulty: {next_problem['difficulty']}")
    print(f"   Section: {next_problem['section']}")
    print(f"   URL: https://leetcode.com/problems/{next_problem['slug']}/")
else:
    print("\n🎉 All problems completed!")
