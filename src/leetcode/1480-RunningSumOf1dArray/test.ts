// To run test use this:
// yarn jest src/leetcode/1480-RunningSumOf1dArray --watch
import { runningSum } from './index'

test('Running Sum of 1d Array', () => {
  expect(runningSum).toBeDefined();
});

test('[1,2,3,4]', () => {
  expect(runningSum([1,2,3,4])).toEqual([1,3,6,10]);
});

test('[1,1,1,1,1]', () => {
  expect(runningSum([1,1,1,1,1])).toEqual([1,2,3,4,5]);
});

test('[3,1,2,10,1]', () => {
  expect(runningSum([3,1,2,10,1])).toEqual([3,4,6,16,17]);
});
