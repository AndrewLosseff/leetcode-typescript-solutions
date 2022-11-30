// To run test use this:
// yarn jest src/leetcode/0021-MergeTwoSortedLists --watch
import { deleteNodes } from './index'

test('Delete N Nodes After M Nodes of a Linked List', () => {
  expect(deleteNodes).toBeDefined();
});

test('head = [1,2,3,4,5,6,7,8,9,10,11,12,13], m = 2, n = 3', () => {
  expect(deleteNodes([1,2,3,4,5,6,7,8,9,10,11,12,13], 2, 3)).toEqual([1,2,6,7,11,12]);
});

test('head = [1,2,3,4,5,6,7,8,9,10,11], m = 1, n = 3', () => {
  expect(deleteNodes([1,2,3,4,5,6,7,8,9,10,11],1, 3)).toEqual([1,5,9]);
});

test('head = [1,2,3,4,5,6,7,8,9,10,11], m = 3, n = 1', () => {
  expect(deleteNodes([1,2,3,4,5,6,7,8,9,10,11], 3, 1)).toEqual([1,2,3,5,6,7,9,10,11]);
});

test('head = [9,3,7,7,9,10,8,2], 1, 2', () => {
  expect(deleteNodes([9,3,7,7,9,10,8,2], 1, 2)).toEqual([9,7,8]);
});
