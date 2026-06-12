/**
  Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
	// // First working code
	// for (let index = 1; index <= k; index++) {
	// 	const lastElement = nums.pop();
	// 	if (lastElement === undefined) continue;
	// 	nums.unshift(lastElement);
	// }
	// ==================

	// // Approach A: Array Slicing (JavaScript way)
	// // nums = [1,2,3,4,5,6,7], k = 3
	// // Result should be [5,6,7,1,2,3,4]
	// // Where would you "cut" the array?
	// // How would you rearrange the pieces?

	// const finalSlice = nums.slice(-k);
	// const beginningSlice = nums.slice(0, nums.length - k);

	// const finalArray = finalSlice.concat(beginningSlice);
	// for (let index = 0; index < nums.length; index++) {
	// 	nums[index] = finalArray[index];
	// }

	// ==================

	// // Approach B: The Reversal Trick (works in any language!)
	// // 	nums = [1,2,3,4,5,6,7], k = 3

	// // // Step 1: Reverse entire array
	// // [7,6,5,4,3,2,1]

	// // // Step 2: Reverse first k elements
	// // [?, ?, ?, ?, ?, ?, ?]

	// // // Step 3: Reverse remaining elements
	// // [?, ?, ?, ?, ?, ?, ?]
	const reverseArray = (array: number[], start: number, end: number) => {
		k = k % nums.length;
		if (k === 0) return;

		while (start < end) {
			const temp = array[start];
			array[start] = array[end];
			array[end] = temp;

			start++;
			end--;
		}
	};

	reverseArray(nums, 0, nums.length - 1); // reverse the whole array
	reverseArray(nums, 0, k - 1); // reverse the chunk that was at the end and moved to the beginning
	reverseArray(nums, k, nums.length - 1); // reverse the rest of the array

	// ==================

	// // Approach C: Cyclic Replacements
	// // Place each element directly where it should go, but handle cycles.
	// for (let index = 1; index <= k; index++) {
	// 	let pos1 = nums.length - index;
	// 	let pos2 = k - index;

	// 	const element1 = nums[pos1];
	// 	const element2 = nums[pos2];

	// 	nums[pos1] = element2;
	// 	nums[pos2] = element1;
	// }
}

const array = [1, 2, 3, 4, 5, 6, 7];
rotate(array, 3);
console.log(array);

// const array = [-1, -100, 3, 99];
// rotate(array, 2);
// console.log(array);
