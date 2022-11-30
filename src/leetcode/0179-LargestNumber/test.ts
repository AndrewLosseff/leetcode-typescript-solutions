// To run test use this:
// yarn jest src/leetcode/0179-LargestNumber --watch
import { largestNumber } from './index'

test('Largest Number', () => {
  expect(largestNumber).toBeDefined();
});

test('numbers = [10,2]', () => {
  expect(largestNumber([10,2])).toEqual("210");
});

test('numbers = [3,30,34,5,9]', () => {
  expect(largestNumber([3,30,34,5,9])).toEqual("9534330");
});
