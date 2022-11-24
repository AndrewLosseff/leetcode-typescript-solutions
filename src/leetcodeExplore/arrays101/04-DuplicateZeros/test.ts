// To run test use this:
// yarn jest src/leetcodeExplore/arrays101/04-DuplicateZeros --watch
import { duplicateZeros } from './index'

test('Duplicate Zeros', () => {
  expect(duplicateZeros).toBeDefined();
});

test('nums = [1,0,2,3,0,4,5,0]', () => {
  expect(duplicateZeros([1,0,2,3,0,4,5,0])).toEqual([1,0,0,2,3,0,0,4]);
});

test('nums = [1,2,3]', () => {
  expect(duplicateZeros([1,2,3])).toEqual([1,2,3]);
});
