// To run test use this:
// yarn jest src/leetcode/0448-FindAllNumbersDisappearedInAnArray --watch

import { findDisappearedNumbers } from './index'

test('Find All Numbers Disappeared in an Array', () => {
  expect(findDisappearedNumbers).toBeDefined();
});

test('[4,3,2,7,8,2,3,1]', () => {
    expect(findDisappearedNumbers([4,3,2,7,8,2,3,1])).toEqual([5,6])
});

test('[1,1]', () => {
  expect(findDisappearedNumbers([1,1])).toEqual([2])
});
