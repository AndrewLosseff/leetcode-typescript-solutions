// To run test use this:
// yarn jest src/leetcodeExplore/arrays101/13-HeightChecker --watch
import { heightChecker } from './index'

test('Height Checker', () => {
  expect(heightChecker).toBeDefined();
});

test('nums = [1,1,4,2,1,3]', () => {
  expect(heightChecker([1,1,4,2,1,3])).toEqual(3);
});

test('nums = [5,1,2,3,4]', () => {
  expect(heightChecker([5,1,2,3,4])).toEqual(5);
});

test('nums = [1,2,3,4,5]', () => {
  expect(heightChecker([1,2,3,4,5])).toEqual(0);
});

test('nums = [10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7]', () => {
  expect(heightChecker([10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7])).toEqual(22);
});
