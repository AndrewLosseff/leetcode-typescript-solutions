// To run test use this:
// yarn jest src/leetcode/0203-RemoveLinkedListElements --watch

import { removeElements } from './index'

test('Remove Linked List Elements', () => {
  expect(removeElements).toBeDefined();
});

test('head = [1,2,6,3,4,5,6]', () => {
    expect(removeElements([1,2,6,3,4,5,6], 6)).toEqual([1,2,3,4,5])
});

test('head = []', () => {
  expect(removeElements([], 1)).toEqual([])
});

test('head = [7,7,7,7]', () => {
  expect(removeElements([7,7,7,7], 7)).toEqual([])
});
