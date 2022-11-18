// To run test use this:
// yarn jest src/0567-PermutationInString --watch

import { checkInclusion } from './index'

test('Permutation in String', () => {
  expect(checkInclusion).toBeDefined();
});

test('s1 = "ab", s2 = "eidbaooo"', () => {
    expect(checkInclusion("ab", "eidbaooo")).toEqual(true)
});

test('s1 = "ab", s2 = "eidboaoo"', () => {
  expect(checkInclusion("ab", "eidboaoo")).toEqual(false)
});

test('s1 = "abc", s2 = "bbbca"', () => {
  expect(checkInclusion("abc", "bbbca")).toEqual(true)
});
