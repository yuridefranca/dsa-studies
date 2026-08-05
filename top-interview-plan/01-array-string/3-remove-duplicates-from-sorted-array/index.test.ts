import { describe, it, expect } from 'vitest';
import { removeDuplicates } from './index';

describe('Remove Duplicates from Sorted Array', () => {
	it('example 1 - two duplicates at start', () => {
		const nums = [1, 1, 2];
		const k = removeDuplicates(nums);
		expect(k).toBe(2);
		expect(nums.slice(0, k)).toEqual([1, 2]);
	});

	it('example 2 - multiple groups of duplicates', () => {
		const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
		const k = removeDuplicates(nums);
		expect(k).toBe(5);
		expect(nums.slice(0, k)).toEqual([0, 1, 2, 3, 4]);
	});

	it('handles single element array', () => {
		const nums = [1];
		const k = removeDuplicates(nums);
		expect(k).toBe(1);
		expect(nums.slice(0, k)).toEqual([1]);
	});

	it('handles array with all identical elements', () => {
		const nums = [5, 5, 5, 5, 5];
		const k = removeDuplicates(nums);
		expect(k).toBe(1);
		expect(nums.slice(0, k)).toEqual([5]);
	});

	it('handles array with no duplicates', () => {
		const nums = [1, 2, 3, 4, 5];
		const k = removeDuplicates(nums);
		expect(k).toBe(5);
		expect(nums.slice(0, k)).toEqual([1, 2, 3, 4, 5]);
	});

	it('handles two elements - duplicates', () => {
		const nums = [3, 3];
		const k = removeDuplicates(nums);
		expect(k).toBe(1);
		expect(nums.slice(0, k)).toEqual([3]);
	});

	it('handles two elements - no duplicates', () => {
		const nums = [1, 2];
		const k = removeDuplicates(nums);
		expect(k).toBe(2);
		expect(nums.slice(0, k)).toEqual([1, 2]);
	});

	it('handles negative numbers', () => {
		const nums = [-3, -3, -1, 0, 0, 2];
		const k = removeDuplicates(nums);
		expect(k).toBe(4);
		expect(nums.slice(0, k)).toEqual([-3, -1, 0, 2]);
	});
});
