// To run test use this:
// yarn jest src/0704-BinarySearch --watch

import { search } from './index'

test('Binary Search', () => {
  expect(search).toBeDefined();
});

test('nums = [-1,0,3,5,9,12], target = 9', () => {
    expect(search([-1,0,3,5,9,12], 9)).toEqual(4)
});

test('nums = [-1,0,3,5,9,12], target = 2', () => {
    expect(search([-1,0,3,5,9,12], 2)).toEqual(-1)
});

test('nums = [-1,0,3,5,9,12,14], target = 2', () => {
  expect(search([-1,0,3,5,9,12,14], 14)).toEqual(6)
});
