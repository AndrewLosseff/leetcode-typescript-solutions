// To run test use this:
// yarn jest src/leetcode/1189-MaximumNumberofBalloons --watch

import { maxNumberOfBalloons } from './index'

test('Maximum Number of Balloons', () => {
  expect(maxNumberOfBalloons).toBeDefined();
});

test('"nlaebolko"', () => {
    expect(maxNumberOfBalloons("nlaebolko")).toEqual(1)
});

test('"loonbalxballpoon"', () => {
  expect(maxNumberOfBalloons("loonbalxballpoon")).toEqual(2)
});

test('"leetcode"', () => {
  expect(maxNumberOfBalloons("leetcode")).toEqual(0)
});
