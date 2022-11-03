// 👉 Write your tests below here:

import IDsInTheQueue from './main.js'
import { expect, test } from '@jest/globals'

test.each([
[[32, 33, 16, 40], [32, 33, 40] ],
[[13, 35, 24, 19], [35, 24, 19]],
[[18, 18], [18, 18]],
])("Thre test in one", function (queue, expected){
const actual = IDsInTheQueue(queue);
expect(actual).toStrictEqual(expected);
})

