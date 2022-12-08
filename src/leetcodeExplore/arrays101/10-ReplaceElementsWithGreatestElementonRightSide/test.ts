// To run test use this:
// yarn jest src/leetcodeExplore/arrays101/10-ReplaceElementsWithGreatestElementonRightSide --watch
import { replaceElements } from './index'

test('Replace Elements With Greatest Element on Right Side', () => {
  expect(replaceElements).toBeDefined();
});

test('nums = [17,18,5,4,6,1]', () => {
  expect(replaceElements([17,18,5,4,6,1])).toEqual([18,6,6,6,1,-1]);
});

test('nums = [400]', () => {
  expect(replaceElements([400])).toEqual([-1]);
});
