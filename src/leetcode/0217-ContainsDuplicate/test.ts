// To run test use this:
// yarn jest src/leetcode/0217-ContainsDuplicate --watch
import { containsDuplicate } from './index'

test('Contains Duplicate', () => {
  expect(containsDuplicate).toBeDefined();
});

test('Contains Duplicate [1,2,3,1]', () => {
  expect(containsDuplicate([1,2,3,1])).toEqual(true)
});

test('Contains Duplicate [1,2,3,4]', () => {
  expect(containsDuplicate([1,2,3,4])).toEqual(false)
});

test('Contains Duplicate [1,1,1,3,3,4,3,2,4,2]', () => {
  expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toEqual(true)
});