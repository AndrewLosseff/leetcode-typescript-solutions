// To run test use this:
// yarn jest src/0167-TwoSumTwoInputArrayIsSorted --watch
import { twoSum } from './index'

test(' Two Sum II - Input Array Is Sorted', () => {
  expect(twoSum).toBeDefined();
});

test('numbers = [2,7,11,15], target = 9', () => {
  expect(twoSum([2,7,11,15], 9)).toEqual([1,2]);
});

test('numbers = [2,3,4], target = 6', () => {
  expect(twoSum([2,3,4], 6)).toEqual([1,3]);
});

test('numbers = [-1,0], target = -1', () => {
  expect(twoSum([-1,0], -1)).toEqual([1,2]);
});
