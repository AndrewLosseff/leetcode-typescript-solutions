// To run test use this:
// yarn jest src/leetcode/0242-ValidAnagram --watch

import { isAnagram } from './index'

test('Valid Anagram', () => {
  expect(isAnagram).toBeDefined();
});

test('Valid Anagram "anagram", "nagaram"', () => {
    expect(isAnagram("anagram", "nagaram")).toEqual(true)
});

test('Valid Anagram "rat", "car"', () => {
    expect(isAnagram("rat", "car")).toEqual(false)
});
