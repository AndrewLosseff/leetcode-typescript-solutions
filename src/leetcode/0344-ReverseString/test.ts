// To run test use this:
// yarn jest src/leetcode/0344-ReverseString --watch

import { reverseString } from './index'

test('Reverse String', () => {
  expect(reverseString).toBeDefined();
});

test('["h","e","l","l","o"]', () => {
    expect(reverseString(["h","e","l","l","o"])).toEqual(["o","l","l","e","h"])
});

test('["H","a","n","n","a","h"]', () => {
  expect(reverseString(["H","a","n","n","a","h"])).toEqual(["h","a","n","n","a","H"])
});
