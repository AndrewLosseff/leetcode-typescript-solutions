// To run test use this:
// yarn jest src/leetcode/leetcodeExplore/arrays101/02-FindNumberswithEvenNumberofDigits --watch
import { findNumbers } from './index'

test('Find Numbers with Even Number of Digits', () => {
  expect(findNumbers).toBeDefined();
});

test('nums = [12,345,2,6,7896]', () => {
  expect(findNumbers([12,345,2,6,7896])).toEqual(2);
});

test('nums = [555,901,482,1771]', () => {
  expect(findNumbers([555,901,482,1771])).toEqual(1);
});
