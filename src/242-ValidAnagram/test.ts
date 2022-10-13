// To run test use this:
// yarn jest src/242-ValidAnagram --watch

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
