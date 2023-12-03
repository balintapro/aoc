import { expect, test, describe } from "bun:test";
import { input, partOne, partTwo } from './index.js'

describe("checking day 1 solution", () => {

    test('part 1 - should resolve to: 55386', () => {
        expect(partOne(input)).toBe(55386)
    })

    test('part 2 - should resolve to: 54807', () => {
        expect(partTwo(input)).toBe(54807)
    })

});