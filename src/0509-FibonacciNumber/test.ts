// To run test use this:
// yarn jest src/0509-FibonacciNumber --watch

import { fib } from './index'

test('Fibonacci Number', () => {
  expect(fib).toBeDefined();
});

test('2', () => {
    expect(fib(2)).toEqual(1)
});

test('3', () => {
  expect(fib(3)).toEqual(2)
});

test('4', () => {
  expect(fib(4)).toEqual(3)
});
