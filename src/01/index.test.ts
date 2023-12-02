import { expect, test, describe } from "bun:test";
import { input, firstPart, secondPart } from './index.js'

describe("checking day 1 solution", () => {

    test('part 1 - should resolve to: 55386', () => {
        expect(firstPart(input)).toBe(55386)
    })

    test('part 2 - should resolve to: 54807', () => {
        expect(secondPart(input)).toBe(54807)
    })

});