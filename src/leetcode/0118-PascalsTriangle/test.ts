// To run test use this:
// yarn jest src/leetcode/0118-PascalsTriangle --watch
import { generate } from './index'

test('Pascal\'s Triangle', () => {
  expect(generate).toBeDefined();
});

test('numRows = 5', () => {
  expect(generate(5)).toEqual([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]);
});

test('numRows = 1', () => {
  expect(generate(1)).toEqual([[1]]);
});
