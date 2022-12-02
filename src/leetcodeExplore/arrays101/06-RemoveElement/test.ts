// To run test use this:
// yarn jest src/leetcodeExplore/arrays101/06-RemoveElement --watch
import { removeElement } from './index'

test('Remove Element', () => {
  expect(removeElement).toBeDefined();
});

test('nums = [3,2,2,3], val = 3', () => {
  expect(removeElement([3,2,2,3], 3)).toEqual(2);
});

test('nums = [0,1,2,2,3,0,4,2], val = 2', () => {
  expect(removeElement([0,1,2,2,3,0,4,2], 2)).toEqual(5);
});
