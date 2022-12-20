// To run test use this:
// yarn jest src/leetcodeExplore/arraysAndString101/02-LargestNumberAtLeastTwiceofOthers --watch
import { dominantIndex } from './index'

test('Largest Number At Least Twice of Others', () => {
  expect(dominantIndex).toBeDefined();
});

test('nums = [3,6,1,0]', () => {
  expect(dominantIndex([3,6,1,0])).toEqual(1);
});

test('nums = [1,2,3,4]', () => {
  expect(dominantIndex([1,2,3,4])).toEqual(-1);
});
