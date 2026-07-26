# Recap: Merge Sorted Array

**Problem:** [merge-sorted-array](https://leetcode.com/problems/merge-sorted-array/)  
**Difficulty:** EASY  
**Section:** Array / String  
**Date Completed:** July 26, 2026  
**Techniques Used:** Two Pointers (from the end)

---

## 🎯 Problem Essence

Merge two sorted arrays into a single sorted array, stored in-place inside `nums1`, which has pre-allocated space (`m + n` slots) for the result. The challenge is doing this **in-place without extra memory** while preserving sorted order.

**Key Constraint:** The result must be stored inside `nums1` itself — no returning a new array, no extra O(n) space. The `nums1` array already has `n` zero-padded slots at the end to accommodate the merge.

---

## 🧠 Thinking Process

### Initial Understanding
The first instinct was to iterate from the **beginning** of both arrays, comparing elements and inserting `nums2` values into `nums1` at the correct position using `splice()`. This felt natural — "read left to right, insert where needed."

### Approach Exploration
The forward-iteration approach used `splice()` to insert `nums2` elements into `nums1`. This seemed to work conceptually, but ran into a critical problem: **every insertion shifted all subsequent elements**, causing the `pointer1` to lose track of which element it was comparing.

Tracing through `nums1 = [4,5,6]`, `nums2 = [1,2,3]`:
- After inserting `1` at index 0: `nums1 = [1,4,5,6]`
- But `pointer1` was still at `0`, now pointing to `1` (the just-inserted element!) instead of `4`
- This cascaded into incorrect comparisons and a broken result: `[1,4,2,3,5,6]`

### Breakthrough Moment
The key insight came from the `concepts.md` hint: **"two pointers starting at the end of the valid portion of `nums1` and the end of `nums2`"**. This raised the question: *why from the end?*

The answer: the `n` zero-padded slots at the end of `nums1` are **free space**. If you fill from the back, you're writing into slots that are either:
1. Zeros (padding) — safe to overwrite
2. Already copied to a later position — safe to overwrite

This eliminates the shifting problem entirely. No `splice()`, no elements moving around.

### Optimization Path
1. **First attempt:** Forward iteration with `splice()` — broken due to pointer misalignment after shifts
2. **Second attempt (commented out):** Forward iteration with a `for` loop and explicit pointer-out-of-bounds checks — still conceptually forward, still had issues with the loop counter vs. pointer tracking
3. **Final solution:** Backward iteration with `while (pointer2 >= 0)` — clean, no shifting, no extra space

The loop condition `while (pointer2 >= 0)` is elegant: once all `nums2` elements are placed, the remaining `nums1` elements are **already in the correct position** — no need to keep going.

---

## 💻 Solution Analysis

### Final Approach
**Two Pointers from the End** — start `pointer1` at the last valid element of `nums1` (index `m-1`), `pointer2` at the last element of `nums2` (index `n-1`), and `insertAt` at the last slot of `nums1` (index `m+n-1`). Compare the two elements, place the larger one at `insertAt`, and decrement the corresponding pointer.

**Why This Works:**
- Filling from the end writes into the zero-padded area first, never overwriting unprocessed `nums1` elements
- When `pointer2` reaches `-1`, all `nums2` elements are placed and remaining `nums1` elements are already in place
- When `pointer1` reaches `-1`, the remaining `nums2` elements simply fill the front slots

### Complexity
- **Time:** O(m + n) — each element from both arrays is processed exactly once
- **Space:** O(1) — everything is done in-place, no auxiliary arrays

**Is This Optimal?** Yes. You must examine every element from both arrays at least once, so O(m + n) is the lower bound. In-place means O(1) space is optimal.

---

## 🔄 Alternative Approaches Considered

| Approach | Technique | Time | Space | Why Not Chosen |
|----------|-----------|------|-------|----------------|
| Concat & sort | Sorting | O((m+n) log(m+n)) | O(1) or O(m+n) | Ignores the fact that arrays are already sorted — wastes the sorted property |
| Forward merge with splice | Two Pointers (forward) | O(m×n) worst | O(1) | splice() shifts elements, causing O(n) per insertion and pointer misalignment |
| Forward merge with extra array | Two Pointers + copy | O(m + n) | O(m + n) | Uses extra space; doesn't satisfy in-place constraint |

---

## ⚠️ Common Pitfalls

1. **Merging from the front with insertions**: Using `splice()` or shifting elements forward causes pointer misalignment and O(n) shifts per insertion. The array changes under your feet.
   - **How to avoid:** Always consider: "does my write operation move elements I haven't processed yet?" If yes, find a direction where writes go into already-processed or empty space.

2. **Forgetting to handle when `pointer1` runs out first**: If all `nums1` elements are larger than `nums2` elements, `pointer1` reaches `-1` while `nums2` elements remain. Accessing `nums1[-1]` gives `undefined`.
   - **How to avoid:** The `while (pointer2 >= 0)` loop condition handles this naturally — when `element1` is `undefined`, the comparison `undefined > element2` is `false`, so `element2` is placed. But be aware this relies on JS comparison quirks.

3. **Not recognizing that remaining `nums1` elements are already in place**: When `pointer2` runs out first, the remaining `nums1` elements don't need to be moved — they're already at the front of the array.
   - **How to avoid:** Think about what "already in place" means. If you're filling from the back and `nums2` is exhausted, the front of `nums1` is untouched and correct.

---

## 🔑 Key Insights

> 💡 **Insight 1:** When an array has pre-allocated space at the end, filling from the back avoids overwriting unprocessed data. This is a general pattern: **write direction should go into free/processed space.**

> 💡 **Insight 2:** The loop condition `while (pointer2 >= 0)` is sufficient because once all `nums2` elements are placed, the remaining `nums1` elements are already in their correct positions. You don't need to explicitly handle the `pointer1` remaining case.

> 💡 **Insight 3:** In-place modification problems often have a "direction trick" — the key is finding which direction lets you write without destroying data you still need to read.

---

## 📚 Pattern Recognition

**This problem is an example of:** Two Pointers — Converging from Ends (Backward Merge)

**Similar problems:**
- Remove Element (#2) — two pointers from the same direction, one read/one write
- Remove Duplicates from Sorted Array (#3) — two pointers tracking read and write positions
- Valid Palindrome (#25) — two pointers converging from both ends

**When to use this pattern:**
- Merging or comparing two sorted sequences
- In-place array modification where you have "free space" to write into
- Any problem where forward iteration causes shifting or overwriting

---

## 🎤 Interview Talking Points

If asked this in an interview, here's what to communicate:

1. **Start with:** "I notice this involves merging two sorted arrays in-place. The key constraint is that `nums1` has pre-allocated space at the end."

2. **Explain your approach:** "I'll use two pointers starting from the ends of both arrays, filling `nums1` from the back. This avoids shifting elements and gives us O(m + n) time with O(1) space."

3. **Mention trade-offs:** "A naive approach would be to merge from the front with insertions, but that causes O(n) shifts per insertion. Another option is to use an extra array and copy back, but that uses O(m + n) space."

4. **Walk through:** "Let me trace through Example 1: starting with `pointer1` at 3, `pointer2` at 6, and `insertAt` at the last slot. I compare 3 vs 6, place 6, then 3 vs 5, place 5, then 3 vs 2, place 3..."

---

## 🤔 Reflection Questions

- What was the hardest part of this problem? *Recognizing that the direction of iteration matters — forward iteration with insertions breaks pointer tracking.*
- What would you do differently if you saw this fresh in an interview? *Immediately look for the "free space" in the array and consider filling from that direction.*
- How would you adapt this solution if `nums1` didn't have pre-allocated space? *You'd need to either allocate a new array (O(m+n) space) or use a different data structure.*
- What similar problem could you solve now with this pattern? *Any in-place merge or array compaction problem where you have a read pointer and a write pointer moving in a specific direction.*

---

## 📝 Notes

- The commented-out `for` loop in the solution shows the evolution from forward to backward iteration — useful to keep as a reminder of the journey
- The `while (pointer2 >= 0)` condition is a subtle but important choice: it implicitly handles the case where `pointer1` runs out first (remaining `nums2` elements fill the front), and explicitly handles the case where `pointer2` runs out first (remaining `nums1` elements are already in place, so we stop)
- The `console.log` statements should be removed before submitting to LeetCode
