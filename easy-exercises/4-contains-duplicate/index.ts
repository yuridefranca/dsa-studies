// on each number iterate over the array and check if there's another
// value with the same number with a different index

function containsDuplicate(nums: number[]): boolean {
	// // My solution
	// for (let index = 0; index < nums.length; index++) {
	// 	const currentElement = nums[index];
	// 	for (let i = 0; i < nums.length; i++) {
	// 		const element = nums[i];
	// 		if (currentElement === element && index !== i) {
	// 			return true;
	// 		}
	// 	}
	// }
	// ================

	// // Approach A: Using a "Memory" Structure
	// // As you iterate through the array once:
	// //
	// // Remember each number you see
	// // Before adding to memory, check if it's already there
	// // If yes → duplicate found!
	// // If you finish the loop → no duplicates
	// // Hint: What JavaScript data structure is perfect for "has I seen this value?"
	// const memory = new Set();
	// for (let index = 0; index < nums.length; index++) {
	// 	const element = nums[index];
	// 	if (memory.has(element)) return true;

	// 	memory.add(element);
	// }

	// ================

	// // 	Approach B: Sorting First
	// // Questions:
	// //
	// // If duplicates exist, where would they be after sorting?
	// // Do you need nested loops to find adjacent duplicates?
	// // Time complexity of sorting?
	// const sortedNums = nums.toSorted((a, b) => a - b);
	// for (let index = 0; index < sortedNums.length; index++) {
	// 	const element = sortedNums[index];
	// 	const nextElement = sortedNums[index + 1];

	// 	if (element === nextElement) return true;
	// }

	// ================

	// Approach C: Mathematical Trick (Advanced)
	// Question: How do you count unique elements efficiently?
	// return new Set(nums).size !== nums.length;
	
	return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));

// When would each approach be best?

// 1. Array with duplicate at the start: [5, 5, 1, 2, 3, ...]
// - Approach A: Returns immediately ⚡
// - Approach C: Processes entire array 🐌

// 2. Already sorted array: [1, 2, 3, 4, 5, ...]
// - Approach B: Saves sorting time!
// - Approach A/C: Still O(n)

// 3. Limited memory environment:
// - Approach B wins (O(1) space)
