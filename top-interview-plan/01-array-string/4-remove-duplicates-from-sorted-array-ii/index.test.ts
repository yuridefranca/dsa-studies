import { describe, it, expect } from 'vitest';
import { removeDuplicates } from './index';

describe('Remove Duplicates from Sorted Array II', () => {
	it('example 1 - three 1s reduced to two', () => {
		const nums = [1, 1, 1, 2, 2, 3];
		const k = removeDuplicates(nums);
		expect(k).toBe(5);
		expect(nums.slice(0, k)).toEqual([1, 1, 2, 2, 3]);
	});

	it('example 2 - four 1s reduced to two', () => {
		const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
		const k = removeDuplicates(nums);
		expect(k).toBe(7);
		expect(nums.slice(0, k)).toEqual([0, 0, 1, 1, 2, 3, 3]);
	});

	it('handles single element array', () => {
		const nums = [1];
		const k = removeDuplicates(nums);
		expect(k).toBe(1);
		expect(nums.slice(0, k)).toEqual([1]);
	});

	it('handles two identical elements - both kept', () => {
		const nums = [3, 3];
		const k = removeDuplicates(nums);
		expect(k).toBe(2);
		expect(nums.slice(0, k)).toEqual([3, 3]);
	});

	it('handles three identical elements - one removed', () => {
		const nums = [5, 5, 5];
		const k = removeDuplicates(nums);
		expect(k).toBe(2);
		expect(nums.slice(0, k)).toEqual([5, 5]);
	});

	it('handles array with no duplicates', () => {
		const nums = [1, 2, 3, 4, 5];
		const k = removeDuplicates(nums);
		expect(k).toBe(5);
		expect(nums.slice(0, k)).toEqual([1, 2, 3, 4, 5]);
	});

	it('handles array where all elements appear exactly twice', () => {
		const nums = [1, 1, 2, 2, 3, 3];
		const k = removeDuplicates(nums);
		expect(k).toBe(6);
		expect(nums.slice(0, k)).toEqual([1, 1, 2, 2, 3, 3]);
	});

	it('handles large group of identical elements', () => {
		const nums = [5, 5, 5, 5, 5, 5];
		const k = removeDuplicates(nums);
		expect(k).toBe(2);
		expect(nums.slice(0, k)).toEqual([5, 5]);
	});

	it('handles negative numbers', () => {
		const nums = [-3, -3, -3, -1, 0, 0, 2];
		const k = removeDuplicates(nums);
		expect(k).toBe(6);
		expect(nums.slice(0, k)).toEqual([-3, -3, -1, 0, 0, 2]);
	});
});
