// To run test use this:
// yarn jest src/0021-MergeTwoSortedLists --watch
import { mergeTwoLists } from './index'

test('Merge Two Sorted Lists', () => {
  expect(mergeTwoLists).toBeDefined();
});

test('list1 = [1,2,4], list2 = [1,3,4]', () => {
  expect(mergeTwoLists([1,2,4], [1,3,4])).toEqual([1,1,2,3,4,4]);
});

test('list1 = [1,2,], list2 = [1,3,4,5,8,9]', () => {
  expect(mergeTwoLists([1,2], [1,3,4,5,8,9])).toEqual([1,1,2,3,4,5,8,9]);
});

test('list1 = [], list2 = []', () => {
  expect(mergeTwoLists([], [])).toEqual([]);
});

test('list1 = [], list2 = [0]', () => {
  expect(mergeTwoLists([], [0])).toEqual([0]);
});
