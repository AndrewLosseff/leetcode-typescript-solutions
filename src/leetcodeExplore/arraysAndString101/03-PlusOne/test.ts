// To run test use this:
// yarn jest src/leetcodeExplore/arraysAndString101/03-PlusOne --watch
import { plusOne } from './index'

test('Plus One', () => {
  expect(plusOne).toBeDefined();
});

test('nums = [1,2,3]', () => {
  expect(plusOne([1,2,3])).toEqual([1,2,4]);
});

test('nums = [4,3,2,1]', () => {
  expect(plusOne([4,3,2,1])).toEqual([4,3,2,2]);
});

test('nums = [9]', () => {
  expect(plusOne([9])).toEqual([1,0]);
});

test('nums = [9,9]', () => {
  expect(plusOne([9,9])).toEqual([1,0,0]);
});

test('nums = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]', () => {
  expect(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])).toEqual([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]);
});
