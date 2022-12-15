// To run test use this:
// yarn jest src/leetcodeExplore/arrays101/14-ThirdMaximumNumber --watch
import { thirdMax } from './index'

test('Third Maximum Number', () => {
  expect(thirdMax).toBeDefined();
});

test('nums = [3,2,1]', () => {
  expect(thirdMax([3,2,1])).toEqual(1);
});

test('nums = [1,2]', () => {
  expect(thirdMax([1,2])).toEqual(2);
});

test('nums = [2,2,3,1]', () => {
  expect(thirdMax([2,2,3,1])).toEqual(1);
});

test('nums = [1,2,2,5,3,5]', () => {
  expect(thirdMax([1,2,2,5,3,5])).toEqual(2);
});
