// To run test use this:
// yarn jest src/0665-NonDecreasingArray --watch

import { checkPossibility } from './index'

test('Non-decreasing Array', () => {
  expect(checkPossibility).toBeDefined();
});

test('nums = [4,2,3]', () => {
    expect(checkPossibility([4,2,3])).toEqual(true)
});

test('nums = [4,2,1]', () => {
  expect(checkPossibility([4,2,1])).toEqual(false)
});

test('nums = [3,4,2,3]', () => {
  expect(checkPossibility([3,4,2,3])).toEqual(false)
});

test('nums = [-1,4,2,3]', () => {
  expect(checkPossibility([-1,4,2,3])).toEqual(true)
});

