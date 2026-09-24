# DSA Concepts: Majority Element

## Hash Table

**Definition:** A data structure that maps keys to values using a hash function, enabling O(1) average-time lookups, insertions, and deletions. It's the go-to structure for counting frequencies, checking membership, and grouping elements by a key.

**Relevance to this problem:** The most intuitive approach is to count the frequency of each element using a hash map. After counting, you iterate through the map to find the element with the highest count. Since the majority element appears more than ⌊n/2⌋ times, it's guaranteed to have the highest count. This gives an O(n) time, O(n) space solution.

**Real-world applications:**
- **Voting systems:** Counting ballots and determining the winner when one candidate has a clear majority
- **Log analysis:** Identifying the most frequent error code or IP address in server logs
- **Inventory management:** Tracking which product SKU appears most frequently in orders

---

## Divide and Conquer

**Definition:** A problem-solving paradigm that breaks a problem into smaller subproblems, solves each recursively, and then combines the results. The key insight is that if the majority element exists in the full array, it must also be the majority element in at least one half.

**Relevance to this problem:** You can split the array in half, recursively find the majority element of each half, and then combine: if both halves agree on the majority element, that's the answer; if they disagree, count occurrences of each candidate in the full array to determine the winner. This yields O(n log n) time and O(log n) space.

**Real-world applications:**
- **Parallel vote counting:** Splitting ballots across multiple machines, each finding a local majority, then merging results
- **Distributed data analysis:** Finding the most common value in datasets spread across multiple servers
- **Tournament brackets:** Determining a winner through elimination rounds where each round narrows the candidates

---

## Sorting

**Definition:** Arranging elements in a specific order (ascending or descending). For sorted arrays, the majority element is guaranteed to occupy the middle position (index ⌊n/2⌋), because it appears more than half the time.

**Relevance to this problem:** If you sort the array, the element at index ⌊n/2⌋ must be the majority element — since it appears more than ⌊n/2⌋ times, it will always span across the midpoint. This gives an O(n log n) time, O(1) space solution (or O(n) space depending on the sort).

**Real-world applications:**
- **Median finding:** In statistics, the median of a sorted dataset is a robust measure of central tendency
- **Database indexing:** Sorted indexes allow quick lookups of the most frequent or median values
- **Quality control:** Finding the most common measurement in a sorted list of manufacturing tolerances

---

## Counting

**Definition:** A technique that tallies occurrences of each distinct value. When the range of values is small, a simple array can serve as a frequency counter instead of a hash map, achieving O(1) per operation with a smaller constant factor.

**Relevance to this problem:** If the range of values were small (e.g., 0 to 100), you could use an array of counters instead of a hash map. However, since the constraints allow values from -10^9 to 10^9, a hash map is more appropriate. Counting is the conceptual foundation for understanding why the majority element can be identified by frequency.

**Real-world applications:**
- **Election tallies:** Counting votes per candidate in a poll with a limited set of choices
- **Frequency analysis:** Counting letter occurrences in cryptography to break substitution ciphers
- **Resource monitoring:** Counting how many times each type of event occurs in a system
