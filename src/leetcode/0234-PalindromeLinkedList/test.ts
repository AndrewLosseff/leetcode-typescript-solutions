// To run test use this:
// yarn jest src/leetcode/0234-PalindromeLinkedList --watch
import { isPalindrome } from './index'

test('Palindrome Linked List', () => {
  expect(isPalindrome).toBeDefined();
});

test('[1,2,2,1]', () => {
  expect(isPalindrome([1,2,2,1])).toEqual(true);
});

test('[1,2]', () => {
  expect(isPalindrome([1,2])).toEqual(false);
});
