// To run test use this:
// yarn jest src/leetcode/leetcodeExplore/arrays101/01-MaxConsecutiveOnes --watch
import { findMaxConsecutiveOnes } from './index'

test('Max Consecutive Ones', () => {
  expect(findMaxConsecutiveOnes).toBeDefined();
});

test('nums = [1,1,0,1,1,1]', () => {
  expect(findMaxConsecutiveOnes([1,1,0,1,1,1])).toEqual(3);
});

test('nums = [1,0,1,1,0,1]', () => {
  expect(findMaxConsecutiveOnes([1,0,1,1,0,1])).toEqual(2);
});

