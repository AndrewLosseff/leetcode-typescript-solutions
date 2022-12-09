// To run test use this:
// yarn jest src/leetcodeExplore/arrays101/12-SortArrayByParity --watch
import { sortArrayByParity } from './index'

test('Sort Array By Parity', () => {
  expect(sortArrayByParity).toBeDefined();
});

test('nums = [3,1,2,4]', () => {
  expect(sortArrayByParity([3,1,2,4])).toEqual([2,4,3,1]);
});

test('nums = [0]', () => {
  expect(sortArrayByParity([0])).toEqual([0]);
});
