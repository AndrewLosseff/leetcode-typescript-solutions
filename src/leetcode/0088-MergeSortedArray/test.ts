// To run test use this:
// yarn jest src/leetcode/0088-MergeSortedArray --watch
import { merge } from './index'

test('Merge Sorted Array', () => {
  expect(merge).toBeDefined();
});

test('nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3', () => {
  expect(merge([1,2,3,0,0,0], 3, [2,5,6], 3)).toEqual([1,2,2,3,5,6]);
});

test('nums1 = [1], m = 1, nums2 = [], n = 0', () => {
  expect(merge([1], 1, [], 0)).toEqual([1]);
});

test('nums1 = [0], m = 0, nums2 = [1], n = 1', () => {
  expect(merge([0], 0, [1], 1)).toEqual([1]);
});

test('nums1 = [-1,0,0,3,3,3,0,0,0], m = 6, nums2 = [1,2,2], n = 3', () => {
  expect(merge([-1,0,0,3,3,3,0,0,0], 6, [1,2,2], 3)).toEqual([-1,0,0,1,2,2,3,3,3]);
});

test('nums1 = [2,0], m = 1, nums2 = [1], n = 1', () => {
  expect(merge([2,0], 1, [1], 1)).toEqual([1,2]);
});
