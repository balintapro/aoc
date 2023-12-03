import fs from 'fs';
const txt = require.resolve('./input.txt');

// utils
const input = fs.readFileSync(txt, 'utf8').split('\n');
const dict: { [key: string]: number } = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
};

const sum = (numbers: number[]) => numbers.reduce((a, b) => a + b);

// part one
function digits(str: string): number {
    const match = str.match(/\d/g) ?? '';
    const first = `${match[0]}`;
    const last = `${match[match.length - 1]}`;

    return parseInt(first + last);
}

function partOne(input: string[]) { return sum(input.map(digits)) };

// part two
function numbers(str: string): number {
    const match = str.match(/(\d|one|two|three|four|five|six|seven|eight|nine)/g) ?? '';
    const first = `${dict[match[0]] ?? match[0]}`;
    const last = `${dict[match[match.length - 1]] ?? match[match.length - 1]}`;

    return parseInt(first + last);
}

function partTwo(input: string[]) { return sum(input.map(numbers)) };

// console.log("day: 01, part 01: ", partOne(input));
// console.log("day: 01, part 02: ", partTwo(input));

export { partOne, partTwo, input };
