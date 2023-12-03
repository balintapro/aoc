import { expect, test, describe } from "bun:test";
import { partOne, partTwo, input } from './index.js'

describe("checking day 3 solution", () => {

    test('part 1 - should resolve to: 522726', () => {
        expect(partOne(input)).toBe(522726)
    })

    test('part 2 - should resolve to: 81721933', () => {
        expect(partTwo(input)).toBe(81721933)
    })

});