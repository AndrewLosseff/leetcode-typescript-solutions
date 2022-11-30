// To run test use this:
// yarn jest src/leetcode/0001-TwoSum --watch
import { twoSum } from './index'

test('Two Sum function exists', () => {
  expect(twoSum).toBeDefined();
});

test('Two Sum nums = [2,7,11,15], target = 9', () => {
  expect(twoSum([2,7,11,15], 9)).toEqual([0,1]);
});

test('Two Sum nums = [3,2,4], target = 6', () => {
  expect(twoSum([3,2,4], 6)).toEqual([1,2]);
});

test('Two Sum nums = [3,3], target = 6', () => {
  expect(twoSum([3,3], 6)).toEqual([0,1]);
});

test('Two Sum nums = [2,5,5,11], target = 10', () => {
  expect(twoSum([2,5,5,11], 10)).toEqual([1,2]);
});

test('Two Sum nums = [1,3,4,2], target = 6', () => {
  expect(twoSum([1,3,4,2], 6)).toEqual([2,3]);
});