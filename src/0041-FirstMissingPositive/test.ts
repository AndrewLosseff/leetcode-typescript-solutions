// To run test use this:
// yarn jest src/0041-FirstMissingPositive --watch
import { firstMissingPositive } from './index'

test('First Missing Positive', () => {
  expect(firstMissingPositive).toBeDefined();
});

test('nums = [1,2,0]', () => {
  expect(firstMissingPositive([1,2,0])).toEqual(3); 
});

test('nums = [3,4,-1,1]', () => {
  expect(firstMissingPositive([3,4,-1,1])).toEqual(2);
});

test('nums = [7,8,9,11,12]', () => {
  expect(firstMissingPositive([7,8,9,11,12])).toEqual(1);
});
