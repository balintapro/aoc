import { expect, test, describe } from "bun:test";
import { input, partOne, partTwo } from './index.js'

describe("checking day 2 solution", () => {

    test('part 1 - should resolve to: 2377', () => {
        expect(partOne(input)).toBe(2377)
    })

    test('part 2 - should resolve to: 71220', () => {
        expect(partTwo(input)).toBe(71220)
    })
});