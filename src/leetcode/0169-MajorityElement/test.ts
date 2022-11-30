// To run test use this:
// yarn jest src/leetcode/0169-MajorityElement --watch
import { majorityElement } from './index'

test('Majority Element', () => {
  expect(majorityElement).toBeDefined();
});

test('numbers = [3,2,3]', () => {
  expect(majorityElement([3,2,3])).toEqual(3);
});

test('numbers = [2,2,1,1,1,2,2]', () => {
  expect(majorityElement([2,2,1,1,1,2,2])).toEqual(2);
});
