// To run test use this:
// yarn jest src/0238-ProductOfArrayExceptSelf --watch

import { productExceptSelf } from './index'

test('Valid Anagram', () => {
  expect(productExceptSelf).toBeDefined();
});

test('[1,2,3,4]', () => {
    expect(productExceptSelf([1,2,3,4])).toEqual([24,12,8,6])
});

test('[-1,1,0,-3,3]', () => {
  expect(productExceptSelf([-1,1,0,-3,3])).toEqual([-0,0,9,-0,0])
});
