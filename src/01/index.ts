import * as fs from 'fs';

const input = fs.readFileSync('input.txt', 'utf8');
type ns = string;

// utils
const inputLines = () => input.split('\n')
const sum = (numbers: any[]) => numbers.reduce((a: string, b: string) => parseInt(a) + parseInt(b), 0)

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

// part one
const extractDigits = (str: string): string => {
    const match = str.match(/\d/g) ?? '';
    const first = match[0];
    const last = match[match.length - 1];
    return first.toString() + last.toString();
}

console.info('First part: ', sum(inputLines().map(extractDigits)));

// partTwo
const extractNumber = (str: string): string => {
    const match = str.match(/(\d|one|two|three|four|five|six|seven|eight|nine)/g) ?? '';
    const first = dict[match[0]] ?? match[0];
    const last = dict[match[match.length - 1]] ?? match[match.length - 1];
    return first.toString() + last.toString();
}

console.info('Second part: ', sum(inputLines().map(extractNumber)));
