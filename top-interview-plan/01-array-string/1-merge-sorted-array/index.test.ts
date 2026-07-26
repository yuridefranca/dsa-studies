import { describe, it, expect } from 'vitest';
import { merge } from './index';

describe('Merge Sorted Array', () => {
	it('example 1 - merge two non-empty arrays', () => {
		const nums1 = [1, 2, 3, 0, 0, 0];
		merge(nums1, 3, [2, 5, 6], 3);
		expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
	});

	it('example 2 - merge with empty nums2', () => {
		const nums1 = [1];
		merge(nums1, 1, [], 0);
		expect(nums1).toEqual([1]);
	});

	it('example 3 - merge with empty nums1', () => {
		const nums1 = [0];
		merge(nums1, 0, [1], 1);
		expect(nums1).toEqual([1]);
	});

	it('handles both arrays with same elements', () => {
		const nums1 = [1, 1, 0];
		merge(nums1, 2, [1], 1);
		expect(nums1).toEqual([1, 1, 1]);
	});

	it('handles nums2 elements all smaller than nums1', () => {
		const nums1 = [4, 5, 6, 0, 0, 0];
		merge(nums1, 3, [1, 2, 3], 3);
		expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
	});

	it('handles nums2 elements all larger than nums1', () => {
		const nums1 = [1, 2, 3, 0, 0, 0];
		merge(nums1, 3, [4, 5, 6], 3);
		expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
	});
});
