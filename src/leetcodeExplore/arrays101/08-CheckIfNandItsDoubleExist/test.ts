// To run test use this:
// yarn jest src/leetcodeExplore/arrays101/08-CheckIfNandItsDoubleExist --watch
import { checkIfExist } from './index'

test('Check If N and Its Double Exist', () => {
  expect(checkIfExist).toBeDefined();
});

test('nums = [10,2,5,3]', () => {
  expect(checkIfExist([10,2,5,3])).toEqual(true);
});

test('nums = [3,1,7,11]', () => {
  expect(checkIfExist([3,1,7,11])).toEqual(false);
});

test('nums = [-2,0,10,-19,4,6,-8]', () => {
  expect(checkIfExist([-2,0,10,-19,4,6,-8])).toEqual(false);
});

test('nums = [0,0]', () => {
  expect(checkIfExist([0,0])).toEqual(true);
});