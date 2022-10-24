// To run test use this:
// yarn jest src/utils/ConvertLinkedListToArray.test --watch

import { convertLinkedListToArray } from './ConvertLinkedListToArray'

test('Convert Array to Linked List', () => {
  expect(convertLinkedListToArray).toBeDefined();
});

test('{ val: 10, next: { val: 20, next: null }}', () => {
    expect(convertLinkedListToArray({ val: 10, next: { val: 20, next: null }})).toEqual([10, 20])
});

test('{ val: 0, next: { val: 1, next: { val: 0, next: null }}}', () => {
    expect(convertLinkedListToArray({ val: 0, next: { val: 1, next: { val: 0, next: null } } })).toEqual([0, 1, 0])
});

test('{ val: 0, next: null }', () => {
    expect(convertLinkedListToArray({ val: 0, next: null })).toEqual([0])
});