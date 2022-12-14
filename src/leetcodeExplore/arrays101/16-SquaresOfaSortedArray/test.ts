// To run test use this:
// yarn jest src/leetcodeExplore/arrays101/16-SquaresOfaSortedArray --watch
import { sortedSquares } from './index'

test('Squares of a Sorted Array', () => {
  expect(sortedSquares).toBeDefined();
});

test('nums = [-4,-1,0,3,10]', () => {
  expect(sortedSquares([-4,-1,0,3,10])).toEqual([0,1,9,16,100]);
});

test('nums = [-7,-3,2,3,11]', () => {
  expect(sortedSquares([-7,-3,2,3,11])).toEqual([4,9,9,49,121]);
});
