// To run test use this:
// yarn jest src/0387-FirstUniqueCharacterInAString --watch

import { firstUniqChar } from './index'

test('First Unique Character in a String', () => {
  expect(firstUniqChar).toBeDefined();
});

test('leetcode', () => {
    expect(firstUniqChar("leetcode")).toEqual(0)
});

test('loveleetcode', () => {
    expect(firstUniqChar("loveleetcode")).toEqual(2)
});

test('aabb', () => {
  expect(firstUniqChar("aabb")).toEqual(-1)
});
