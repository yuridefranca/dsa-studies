// Majority Element
// https://leetcode.com/problems/majority-element/

// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:
// n == nums.length
// 1 <= nums.length <= 5 * 10^4
// -10^9 <= nums[i] <= 10^9

export function majorityElement(nums: number[]): number {
  const countMap = new Map<number, number>()
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    const counterElement = countMap.get(element) || 0
    countMap.set(element, counterElement + 1)
  }

  for (const [key, value] of countMap.entries()) {
    if (value > nums.length / 2) {
      return key;
    }
  }

  return 0;
};
