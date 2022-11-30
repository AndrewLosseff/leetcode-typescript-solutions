// To run test use this:
// yarn jest src/leetcode/0070-ClimbingStairs --watch
import { climbStairs } from './index'

test('Climbing Stairs', () => {
  expect(climbStairs).toBeDefined();
});

test('2', () => {
  expect(climbStairs(2)).toEqual(2);
});

test('3', () => {
  expect(climbStairs(3)).toEqual(3);
});

test('4', () => {
  expect(climbStairs(4)).toEqual(5);
});
