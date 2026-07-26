// Merge Sorted Array
// https://leetcode.com/problems/merge-sorted-array/

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
// and two integers m and n, representing the number of elements in nums1 and nums2.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// Example 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

// Example 2:
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]

// Example 3:
// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]

// Constraints:
// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -10^9 <= nums1[i], nums2[j] <= 10^9

/**
 Do not return anything, modify nums1 in-place instead.
 */
export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
	let pointer1 = m - 1;
	let pointer2 = n - 1;
	let insertAt = nums1.length - 1;

	// for (let index = 0; index < totalItems; index++) {
	// 	const element1 = nums1[pointer1];
	// 	const element2 = nums2[pointer2];

	// 	if (element1 > element2 || pointer2 < 0) {
	// 		nums1[insertAt] = element1
	// 		pointer1--
	// 		insertAt--
	// 		continue;
	// 	}

	// 	if (element1 <= element2 || pointer1 < 0) {
	// 		nums1[insertAt] = element2
	// 		pointer2--
	// 		insertAt--
	// 		continue
	// 	}
	// }

	while (pointer2 >= 0) {
		const element1 = nums1[pointer1];
		const element2 = nums2[pointer2];

		if (element1 > element2) {
			nums1[insertAt] = element1
			pointer1--
			insertAt--
			continue
		}

		nums1[insertAt] = element2
		pointer2--
		insertAt--
	}

	console.log(nums1);
	console.log('========== \n\n');
}
