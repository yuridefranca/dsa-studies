# DSA Concepts: Remove Duplicates from Sorted Array

## Two Pointers

**Definition:** A technique that uses two pointers to traverse a data structure, typically moving at different speeds or from different starting positions. In the "slow/fast pointer" variant, one pointer (slow) tracks the position for the next unique element, while the other (fast) scans ahead to find new unique values. This enables in-place modification without extra space.

**Relevance to this problem:** The core challenge is removing duplicates in-place from a sorted array. Since the array is sorted, duplicates are always adjacent. A slow pointer tracks where the next unique element should be placed, while a fast pointer scans through the array. When the fast pointer finds an element different from the one at the slow pointer, it's a new unique value — copy it forward and advance the slow pointer. This gives O(n) time and O(1) space.

**Real-world applications:**
- **Database deduplication:** Removing duplicate records from a sorted dataset without allocating a new table
- **Log compression:** Collapsing consecutive identical log entries into a single representative entry in-place
- **Signal processing:** Removing repeated samples from a digitized signal where consecutive identical values carry no new information

---

## Array

**Definition:** A contiguous block of memory storing elements of the same type, accessed by index in O(1) time. Arrays provide cache-friendly sequential access and are the most fundamental data structure for in-place algorithms.

**Relevance to this problem:** The problem operates on a sorted integer array and requires in-place modification. The key insight is that because the array is sorted, duplicates are guaranteed to be adjacent — you never need to look back further than the last unique element. The "remaining elements beyond k don't matter" property is what makes the in-place solution possible without shifting elements.

**Real-world applications:**
- **File system block allocation:** Operating systems maintain sorted arrays of free disk blocks and compact them by removing adjacent duplicates (merged blocks)
- **Version control:** Storing sorted commit hashes where duplicates (e.g., merge commits) need to be deduplicated
- **Network packet filtering:** Routers maintain sorted lists of packet IDs and remove duplicates to prevent replay attacks
