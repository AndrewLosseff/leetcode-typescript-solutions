// To run test use this:
// yarn jest src/leetcode/0125-ValidPalindrome --watch
import { isPalindrome } from './index'

test('Valid Palindrome function exists', () => {
  expect(isPalindrome).toBeDefined();
});

test('"A man, a plan, a canal: Panama"', () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).toEqual(true);
});

test('"race a car"', () => {
  expect(isPalindrome("race a car")).toEqual(false);
});

test('" "', () => {
  expect(isPalindrome(" ")).toEqual(true);
});

test('"0P"', () => {
  expect(isPalindrome("0P")).toEqual(false);
});