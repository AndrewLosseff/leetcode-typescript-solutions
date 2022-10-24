// To run test use this:
// yarn jest src/0049-GroupAnagrams --watch
import { groupAnagrams } from './index'

test('Group Anagrams', () => {
  expect(groupAnagrams).toBeDefined();
});

test('["eat","tea","tan","ate","nat","bat"]', () => {
  expect(groupAnagrams(["eat","tea","tan","ate","nat","bat"])).toEqual([["bat"],["nat","tan"],["ate","eat","tea"]]);
});

test('[""]', () => {
  expect(groupAnagrams([""])).toEqual([[""]]);
});

test('["a"]', () => {
  expect(groupAnagrams(["a"])).toEqual([["a"]]);
});