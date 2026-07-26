// Remove Element
// https://leetcode.com/problems/remove-element/

// Given an integer array nums and an integer val, remove all occurrences of val
// in nums in-place. The order of the elements may be changed. Return the number
// of elements in nums which are not equal to val.

// Example 1:
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]

// Example 2:
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]

// Constraints:
// 0 <= nums.length <= 100
// 0 <= nums[i] <= 50
// 0 <= val <= 100

export function removeElement(nums: number[], val: number): number {
	let k = 0;

  // for (let index = 0; index < nums.length;) {
  //   const element = nums[index];

  //   if (element !== val) {
  //     k++
  //     index++
  //     continue
  //   }

  //   nums.splice(index, 1)
  // }

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (element === val) continue

    nums[k] = element
    k++
  }

  return k
}
