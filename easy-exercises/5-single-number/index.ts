/**My solution
 * Analysis:
 * ✅ Time: O(n) - single pass ✓
 * ❌ Space: O(n) - Set could hold n/2 elements
 * ✅ Logic: Correct!
 * 🔴 The Problem
 * Look at the constraints again:
 *
 * "use only constant extra space"
 */
// function singleNumber(nums: number[]): number {
// 	const memory = new Set<number>();
// 	for (let index = 0; index < nums.length; index++) {
// 		const element = nums[index];
// 		if (memory.has(element)) {
// 			memory.delete(element);
// 			continue;
// 		}

// 		memory.add(element);
// 	}

// 	return memory.values().next().value as number;
// }

/**
 * Thinking Process
 *
 * Question 1: What if you could "cancel out" pairs?
 *
 * Question 2: Think about Binary/Bitwise Operations
 *
 * There's a special bitwise operation where:
 * a ⊕ a = 0 (anything combined with itself = 0)
 * a ⊕ 0 = a (anything combined with 0 = itself)
 * Order doesn't matter (commutative)
 * This operator is: XOR (^ in JavaScript)
 *
 * Question 3: Try XOR on the Example
 */

function singleNumber(nums: number[]): number {
	let result = 0;

	for (const num of nums) {
		result ^= num;
	}

	return result;
}

console.log(singleNumber([4, 1, 2, 1, 2]));
