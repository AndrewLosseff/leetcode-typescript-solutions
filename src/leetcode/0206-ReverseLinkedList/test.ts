// To run test use this:
// yarn jest src/leetcode/0206-ReverseLinkedList --watch

import { reverseList } from './index'

test('Convert Binary Number in a Linked List to Integer', () => {
  expect(reverseList).toBeDefined();
});

test('head = [1,2,3,4,5]', () => {
    expect(reverseList([1,2,3,4,5])).toEqual([5,4,3,2,1])
});

test('head = [1,2]', () => {
  expect(reverseList([1,2])).toEqual([2,1])
});

test('head = []', () => {
  expect(reverseList([])).toEqual([])
});
