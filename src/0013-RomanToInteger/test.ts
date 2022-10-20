// To run test use this:
// yarn jest src/0013-RomanToInteger --watch
import { romanToInt } from './index'

test('Roman to Integer', () => {
  expect(romanToInt).toBeDefined();
});

test('"III"', () => {
  expect(romanToInt("III")).toEqual(3);
});

test('"LVIII"', () => {
  expect(romanToInt("LVIII")).toEqual(58);
});

test('"MCMXCIV"', () => {
  expect(romanToInt("MCMXCIV")).toEqual(1994);
});

test('"IX"', () => {
  expect(romanToInt("IX")).toEqual(9);
});