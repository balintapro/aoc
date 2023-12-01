import fs from 'fs';

// utils
const lines = fs.readFileSync('input.txt', 'utf8').split('\n');
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
const digits = (str: string) => {
    const match = str.match(/\d/g) ?? '';
    const first = parseInt(match[0]);
    const last = parseInt(match[match.length - 1]);
    return first * 10 + last;
}

console.info('First part: ', sum(lines.map(digits)));

// part two
const numbers = (str: string): number => {
    const match = str.match(/(\d|one|two|three|four|five|six|seven|eight|nine)/g) ?? '';
    const first = dict[match[0]] ?? parseInt(match[0]);
    const last = dict[match[match.length - 1]] ?? parseInt(match[match.length - 1]);
    return first * 10 + last;
}

console.info('Second part: ', sum(lines.map(numbers)));
