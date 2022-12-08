// To run test use this:
// yarn jest src/leetcodeExplore/arrays101/09-ValidMountainArray --watch
import { validMountainArray } from './index'

test('Valid Mountain Array', () => {
  expect(validMountainArray).toBeDefined();
});

test('nums = [2,1]', () => {
  expect(validMountainArray([2,1])).toEqual(false);
});

test('nums = [3,5,5]', () => {
  expect(validMountainArray([3,5,5])).toEqual(false);
});

test('nums = [0,3,2,1]', () => {
  expect(validMountainArray([0,3,2,1])).toEqual(true);
});

test('nums = [2,0,2]', () => {
  expect(validMountainArray([2,0,2])).toEqual(false);
});

test('nums = [0,1,2,1,2]', () => {
  expect(validMountainArray([0,1,2,1,2])).toEqual(false);
});

test('nums = [0,1,2,3,4,5,6,7,8,9]', () => {
  expect(validMountainArray([0,1,2,3,4,5,6,7,8,9])).toEqual(false);
});