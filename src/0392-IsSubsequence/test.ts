// To run test use this:
// yarn jest src/0392-IsSubsequence --watch

import { isSubsequence } from './index'

test('Is Subsequence', () => {
  expect(isSubsequence).toBeDefined();
});

test('s = "abc", t = "ahbgdc"', () => {
    expect(isSubsequence("abc", "ahbgdc")).toEqual(true)
});

test('s = "axc", t = "ahbgdc"', () => {
  expect(isSubsequence("axc", "ahbgdc")).toEqual(false)
});
