// To run test use this:
// yarn jest src/leetcode/0121-BestTimeToBuyAndSellStock --watch
import { maxProfit } from './index'

test('Best Time to Buy and Sell Stock', () => {
  expect(maxProfit).toBeDefined();
});

test('[7,1,5,3,6,4]', () => {
  expect(maxProfit([7,1,5,3,6,4])).toEqual(5);
});

test('[7,6,4,3,1]', () => {
  expect(maxProfit([7,6,4,3,1])).toEqual(0);
});
