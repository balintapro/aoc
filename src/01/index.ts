import * as fs from 'fs';

const input = fs.readFileSync('input.txt', 'utf8');

// utils

function inputLines() {
    return input.split('\n');
}

function sum(numbers: number[]) {
    return numbers.reduce((a, b) => a + b, 0);
}

const digitNames: { [key: string]: number } = {
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

function firstAndLastNumbers() {
    return inputLines()
        .map((line) => line.match(/\d/g))
        .map((match) => parseInt(match![0] + match![match!.length - 1]))
}

function partOne() {
    return sum(firstAndLastNumbers());
}

console.info('First part: ', partOne());

// part two

function firstAndLastNumberOrWord() {
    const solution = inputLines()
        .map((line) => {
            const first: string = line.match(/\d|one|two|three|four|five|six|seven|eight|nine/)?.[0] ?? '';
            const last: string = line.match(/.*(\d|one|two|three|four|five|six|seven|eight|nine)/)?.[1] ?? '';

            return parseInt(
                (digitNames[first] ?? first).toString() +
                (digitNames[last] ?? last).toString()
            );
        });

    return solution;
}

function partTwo() {
    return sum(firstAndLastNumberOrWord());
}

console.info('Second part: ', partTwo());
