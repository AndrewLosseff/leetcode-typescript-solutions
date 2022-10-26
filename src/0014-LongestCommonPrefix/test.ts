// To run test use this:
// yarn jest src/0014-LongestCommonPrefix --watch
import { longestCommonPrefix } from './index'

test('Longest Common Prefix', () => {
  expect(longestCommonPrefix).toBeDefined();
});

test('["flower","flow","flight"]', () => {
  expect(longestCommonPrefix(["flower","flow","flight"])).toEqual('fl');
});

test('["dog","racecar","car"]', () => {
  expect(longestCommonPrefix(["dog","racecar","car"])).toEqual('');
});

test('["aa","aa"]', () => {
  expect(longestCommonPrefix(["aa","aa"])).toEqual('aa');
});
