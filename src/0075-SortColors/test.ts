// To run test use this:
// yarn jest src/0075-SortColors --watch
import { sortColors } from './index'

test('Sort Colors function exists', () => {
  expect(sortColors).toBeDefined();
});

test('Sort Colors [2,0,2,1,1,0] => [0,0,1,1,2,2]', () => {
  expect(sortColors([2,0,2,1,1,0])).toEqual([0,0,1,1,2,2]);
});

test('Sort Colors [2,0,1] => [0,1,2]', () => {
  expect(sortColors([2,0,1])).toEqual([0,1,2]);
});
