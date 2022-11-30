// To run test use this:
// yarn jest src/leetcode/0283-MoveZeroes --watch

import { moveZeroes } from './index'

test('Move Zeroes', () => {
  expect(moveZeroes).toBeDefined();
});

test('[0,1,0,3,12]', () => {
    expect(moveZeroes([0,1,0,3,12])).toEqual([1,3,12,0,0])
});

test('[0]', () => {
  expect(moveZeroes([0])).toEqual([0])
});

test('[0,0,1]', () => {
  expect(moveZeroes([0,0,1])).toEqual([1,0,0])
});
