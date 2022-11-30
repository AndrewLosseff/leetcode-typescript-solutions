// To run test use this:
// yarn jest src/leetcode/003-LongestSubstringWithoutRepeatingCharacters --watch
import { lengthOfLongestSubstring } from './index'

test('Longest Substring Without Repeating Characters', () => {
  expect(lengthOfLongestSubstring).toBeDefined();
});

test('"abcabcbb" => "abc"', () => {
  expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3);
});

test('"bbbbb" => "b"', () => {
  expect(lengthOfLongestSubstring("bbbbb")).toEqual(1);
});

test('"pwwkew" => "wke"', () => {
  expect(lengthOfLongestSubstring("pwwkew")).toEqual(3);
});

test('"aab" => "ab"', () => {
  expect(lengthOfLongestSubstring("aab")).toEqual(2);
});

test('"dvdf" => "vdf"', () => {
  expect(lengthOfLongestSubstring("dvdf")).toEqual(3);
});