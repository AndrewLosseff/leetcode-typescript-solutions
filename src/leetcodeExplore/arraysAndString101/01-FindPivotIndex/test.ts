// To run test use this:
// yarn jest src/leetcodeExplore/arraysAndString101/01-FindPivotIndex --watch
import { pivotIndex } from './index'

test('Find Pivot Index', () => {
  expect(pivotIndex).toBeDefined();
});

test('nums = [1,7,3,6,5,6]', () => {
  expect(pivotIndex([1,7,3,6,5,6])).toEqual(3);
});

test('nums = [1,2,3]', () => {
  expect(pivotIndex([1,2,3])).toEqual(-1);
});

test('nums = [2,1,-1]', () => {
  expect(pivotIndex([2,1,-1])).toEqual(0);
});
