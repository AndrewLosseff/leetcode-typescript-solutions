// To run test use this:
// yarn jest src/0605-CanPlaceFlowers --watch

import { canPlaceFlowers } from './index'

test('Can Place Flowers', () => {
  expect(canPlaceFlowers).toBeDefined();
});

test('flowerbed = [1,0,0,0,1], n = 1', () => {
    expect(canPlaceFlowers([1,0,0,0,1], 1)).toEqual(true)
});

test('flowerbed = [1,0,0,0,1], n = 2', () => {
  expect(canPlaceFlowers([1,0,0,0,1], 2)).toEqual(false)
});

test('flowerbed = [1,0,0,0,0,1], n = 2', () => {
  expect(canPlaceFlowers([1,0,0,0,0,1], 2)).toEqual(false)
});

test('flowerbed = [1,0,0,0,0,0,0,0,1], n = 3', () => {
  expect(canPlaceFlowers([1,0,0,0,0,0,0,0,1], 3)).toEqual(true)
});

test('flowerbed = [1,0,0,0,1,0,0], n = 2', () => {
  expect(canPlaceFlowers([1,0,0,0,1,0,0], 2)).toEqual(true)
});

test('flowerbed = [0,1,0], n = 1', () => {
  expect(canPlaceFlowers([0,1,0], 1)).toEqual(false)
});

test('flowerbed = [0], n = 1', () => {
  expect(canPlaceFlowers([0], 1)).toEqual(true)
});

test('flowerbed = [0,0,1,0,0], n = 2', () => {
  expect(canPlaceFlowers([0,0,1,0,0], 1)).toEqual(true)
});

test('flowerbed = [0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0], n = 17', () => {
  expect(canPlaceFlowers([0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0], 17)).toEqual(false)
});
