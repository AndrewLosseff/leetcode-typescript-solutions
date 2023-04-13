// To run test use this:
// yarn jest src/leetcode/1929-ConcatenationOfArray --watch
import { getConcatenation } from './index'

test('Concatenation of Array', () => {
  expect(getConcatenation).toBeDefined();
});

test('[1,2,1]', () => {
  expect(getConcatenation([1,2,1])).toEqual([1,2,1,1,2,1]);
});

test('[1,3,2,1]', () => {
  expect(getConcatenation([1,3,2,1])).toEqual([1,3,2,1,1,3,2,1]);
});
