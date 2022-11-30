// To run test use this:
// yarn jest src/leetcode/0347-TopKFrequentElements --watch

import { topKFrequent } from './index'

test('Top K Frequent Elements', () => {
  expect(topKFrequent).toBeDefined();
});

test('nums = [1,1,1,2,2,3], k = 2', () => {
    expect(topKFrequent([1,1,1,2,2,3], 2)).toEqual([1, 2])
});

test('nums = [1,1,1,2,2,3,4], k = 2', () => {
  expect(topKFrequent([1,1,1,2,2,3,4], 2)).toEqual([1, 2])
});

test('nums = [1], k = 1', () => {
  expect(topKFrequent([1], 1)).toEqual([1])
});
