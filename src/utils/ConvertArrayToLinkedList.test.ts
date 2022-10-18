// To run test use this:
// yarn jest src/utils/ConvertArrayToLinkedList.test --watch

import { arrayToList } from './ConvertArrayToLinkedList'

test('Convert Array to Linked List', () => {
  expect(arrayToList).toBeDefined();
});

test('head = [10, 20]', () => {
    expect(arrayToList([10, 20])).toEqual({ val: 10, next: { val: 20, next: null } })
});

test('head = [0, 1, 0]', () => {
    expect(arrayToList([0, 1, 0])).toEqual({ val: 0, next: { val: 1, next: { val: 0, next: null } } })
});

test('head = [0]', () => {
    expect(arrayToList([0])).toEqual({ val: 0, next: null })
});
