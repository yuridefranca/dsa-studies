 # DSA Concepts: Merge Sorted Array

## Array

**Definition:** A linear data structure that stores elements in contiguous memory locations, accessible by their index position. Arrays provide O(1) random access and are the most fundamental collection type in most programming languages.

**Relevance to this problem:** Both `nums1` and `nums2` are sorted arrays. The merge operation requires iterating through array elements and placing them in the correct position within `nums1`, which has pre-allocated space for the merged result.

**Real-world applications:**
- Database query result merging (combining sorted result sets from multiple indexes)
- Audio/video buffer management (merging sorted timestamped data streams)
- External sorting algorithms (merge sort uses array merging as its core operation)

---

## Two Pointers

**Definition:** A technique that uses two index variables to traverse a data structure simultaneously, often from different directions or at different speeds. Each pointer tracks a position independently, enabling efficient comparison or merging without extra memory.

**Relevance to this problem:** The optimal O(m + n) solution uses two pointers — one starting at the end of the valid portion of `nums1` and one at the end of `nums2` — to merge from the back, avoiding the need to shift elements forward.

**Real-world applications:**
- Merging sorted log files from different servers by timestamp
- Finding pairs in a sorted list that sum to a target value
- In-place array deduplication by tracking read and write positions

---

## Sorting

**Definition:** The process of arranging elements in a particular order (ascending, descending, or custom). Sorting algorithms vary in time complexity from O(n log n) for comparison-based sorts to O(n) for non-comparison sorts under specific constraints.

**Relevance to this problem:** The input arrays are already sorted, so the merge operation preserves the sorted order. A naive approach would concatenate and re-sort, but leveraging the existing sorted order achieves O(m + n) instead of O((m + n) log(m + n)).

**Real-world applications:**
- Search engine result ranking (merging sorted relevance scores from multiple signals)
- Time-series data aggregation (combining chronologically ordered event streams)
- Priority queue implementations (maintaining sorted order for task scheduling)
