// 👉 Write your tests below here:

import IDsInTheQueue from './main.js'
import { expect, test } from '@jest/globals'

test('Test an array with one number bellow 18', function () {
  expect(IDsInTheQueue([32, 33, 16, 40])).toStrictEqual([32, 33, 40])
})

test('Test an array with two numbers bellow 18', function () {
  expect(IDsInTheQueue([13, 35, 24, 19])).toStrictEqual([35, 24, 19])
})

test('Test an array with two 18s', function () {
  expect(IDsInTheQueue([18, 18])).toStrictEqual([18, 18])
})
