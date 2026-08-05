// Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// Given an integer array nums sorted in non-decreasing order, remove the
// duplicates in-place such that each unique element appears only once. Return
// the number of unique elements in nums.

// Example 1:
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]

// Example 2:
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

// Constraints:
// 1 <= nums.length <= 3 * 10^4
// -100 <= nums[i] <= 100
// nums is sorted in non-decreasing order

export function removeDuplicates(nums: number[]): number {
  let writePointer = 0

  for (let readPointer = 1; readPointer < nums.length; readPointer++) {
    const element = nums[readPointer];
    const lastUnique = nums[writePointer];

    if (element === lastUnique) continue;
    
    writePointer++
    nums[writePointer] = element;
  }

  return writePointer + 1
};
