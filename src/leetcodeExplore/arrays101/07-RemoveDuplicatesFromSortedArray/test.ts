// To run test use this:
// yarn jest src/leetcodeExplore/arrays101/07-RemoveDuplicatesFromSortedArray --watch
import { removeDuplicates } from './index'

test('Remove Duplicates from Sorted Array', () => {
  expect(removeDuplicates).toBeDefined();
});

test('nums = [1,1,2]', () => {
  expect(removeDuplicates([1,1,2])).toEqual(2);
});

test('nums = [0,0,1,1,1,2,2,3,3,4]', () => {
  expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toEqual(5);
});
