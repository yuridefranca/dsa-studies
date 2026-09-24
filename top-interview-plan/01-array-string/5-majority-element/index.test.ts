import { describe, it, expect } from 'vitest';
import { majorityElement } from './index';

describe('Majority Element', () => {
  it('example 1 - majority element 3 appears twice out of 3', () => {
    expect(majorityElement([3, 2, 3])).toBe(3);
  });

  it('example 2 - majority element 2 appears 4 times out of 7', () => {
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
  });

  it('single element array', () => {
    expect(majorityElement([1])).toBe(1);
  });

  it('two elements - majority appears once more', () => {
    expect(majorityElement([2, 2])).toBe(2);
  });

  it('majority element at the beginning', () => {
    expect(majorityElement([6, 6, 6, 7, 7])).toBe(6);
  });

  it('majority element at the end', () => {
    expect(majorityElement([1, 2, 1, 2, 1])).toBe(1);
  });

  it('all elements are the same', () => {
    expect(majorityElement([5, 5, 5, 5])).toBe(5);
  });

  it('negative numbers', () => {
    expect(majorityElement([-1, -1, -1, 2, 3])).toBe(-1);
  });
});
