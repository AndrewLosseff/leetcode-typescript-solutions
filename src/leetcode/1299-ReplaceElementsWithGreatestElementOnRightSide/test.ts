// To run test use this:
// yarn jest src/leetcode/1299-ReplaceElementsWithGreatestElementOnRightSide --watch
import { replaceElements } from './index'

test('Replace Elements with Greatest Element on Right Side', () => {
  expect(replaceElements).toBeDefined();
});

test('[17,18,5,4,6,1]', () => {
  expect(replaceElements([17,18,5,4,6,1])).toEqual([18,6,6,6,1,-1]);
});

test('[400]', () => {
  expect(replaceElements([400])).toEqual([-1]);
});

test('[56903,18666,60499,57517,26961]', () => {
  expect(replaceElements([56903,18666,60499,57517,26961])).toEqual([60499,60499,57517,26961,-1]);
});
