import { describe, it, expect } from 'vitest';
import { removeElement } from './index';

describe('Remove Element', () => {
	it('example 1 - remove all occurrences of val from start and end', () => {
		const nums = [3, 2, 2, 3];
		const k = removeElement(nums, 3);
		expect(k).toBe(2);
		expect(nums.slice(0, k).sort()).toEqual([2, 2]);
	});

	it('example 2 - remove val scattered throughout array', () => {
		const nums = [0, 1, 2, 2, 3, 0, 4, 2];
		const k = removeElement(nums, 2);
		expect(k).toBe(5);
		expect(nums.slice(0, k).sort()).toEqual([0, 0, 1, 3, 4]);
	});

	it('handles empty array', () => {
		const nums: number[] = [];
		const k = removeElement(nums, 1);
		expect(k).toBe(0);
	});

	it('handles array with all elements equal to val', () => {
		const nums = [5, 5, 5, 5];
		const k = removeElement(nums, 5);
		expect(k).toBe(0);
	});

	it('handles array with no elements equal to val', () => {
		const nums = [1, 2, 3, 4];
		const k = removeElement(nums, 5);
		expect(k).toBe(4);
		expect(nums.slice(0, k)).toEqual([1, 2, 3, 4]);
	});

	it('handles single element equal to val', () => {
		const nums = [3];
		const k = removeElement(nums, 3);
		expect(k).toBe(0);
	});

	it('handles single element not equal to val', () => {
		const nums = [1];
		const k = removeElement(nums, 3);
		expect(k).toBe(1);
		expect(nums.slice(0, k)).toEqual([1]);
	});
});
