// Remove Duplicates from Sorted Array II
// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

// Given an integer array nums sorted in non-decreasing order, remove some
// duplicates in-place such that each unique element appears at most twice.
// Return the number of elements remaining after removal.

// Example 1:
// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]

// Example 2:
// Input: nums = [0,0,1,1,1,1,2,3,3]
// Output: 7, nums = [0,0,1,1,2,3,3,_,_]

// Constraints:
// 1 <= nums.length <= 3 * 10^4
// -10^4 <= nums[i] <= 10^4
// nums is sorted in non-decreasing order

export function removeDuplicates(nums: number[]): number {
  let writePointer = 1;

  if (nums.length <= 2) return nums.length;

  for (let readPointer = 2; readPointer < nums.length; readPointer++) {    
    if (nums[readPointer] === nums[writePointer - 1]) continue;

    writePointer++
    nums[writePointer] = nums[readPointer]
  }
  
  return writePointer + 1
};
