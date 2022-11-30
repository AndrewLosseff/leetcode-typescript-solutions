// To run test use this:
// yarn jest src/leetcode/0205-IsomorphicStrings --watch
import { isIsomorphic } from './index'

test('Isomorphic Strings', () => {
  expect(isIsomorphic).toBeDefined();
});

test('s = "egg", t = "add"', () => {
  expect(isIsomorphic("egg", "add")).toEqual(true);
});

test('s = "foo", t = "bar"', () => {
  expect(isIsomorphic("foo", "bar")).toEqual(false);
});

test('s = "paper", t = "title"', () => {
  expect(isIsomorphic("paper", "title")).toEqual(true);
});

test('s = "badc", t = "baba"', () => {
  expect(isIsomorphic("badc", "baba")).toEqual(false);
});
