import fs from 'fs';
const txt = require.resolve('./input.txt');

// utils
const input = fs.readFileSync(txt, 'utf8').split('\n');
const symbol = /[^\d\.]/g;

function partOne(input: string[]) {
    let found = 0;

    for (const [lineIndex, line] of input.entries()) {
        const numbers = [...line.matchAll(/\d+/g)];

        for (const matchedNumbers of numbers) {
            const [partNumber] = matchedNumbers;
            const startIndex = Math.max((matchedNumbers.index ?? 0) - 1, 0);
            const endIndex = (matchedNumbers.index ?? 0) + partNumber.length + 1;

            const match = [lineIndex - 1, lineIndex, lineIndex + 1].some((index) => {
                return input[index]?.slice(startIndex, endIndex)?.match(symbol);
            });

            match && (found += parseInt(partNumber));
        }
    }
    return found
}

function partTwo(input: string[]) {
    let ratiosSum = 0;

    for (const [lineIndex, line] of input.entries()) {
        const gears = [...line.matchAll(/\*/g)];

        for (const gear of gears) {
            const ratios: number[] = [];
            const gearStartIndex = Math.max((gear.index ?? 0) - 1, 0);
            const gearEndIndex = gearStartIndex + 2;

            [lineIndex - 1, lineIndex, lineIndex + 1].forEach((index) => {
                const numbers = [...input[index].matchAll(/\d+/g)];

                numbers.forEach((numberMatch) => {
                    const [number] = numberMatch;
                    const numberStartIndex = numberMatch.index ?? 0;
                    const numberEndIndex = numberStartIndex + number.length - 1;

                    if (numberEndIndex >= gearStartIndex && numberStartIndex <= gearEndIndex) {
                        ratios.push(parseInt(number, 10));
                    }
                });
            });

            (ratios.length === 2) && (ratiosSum += (ratios[0] * ratios[1]));
        }
    }
    return ratiosSum;
}

console.log("day: 03, part 01: ", partOne(input));
console.log("day: 03, part 02: ", partTwo(input));

export { partOne, partTwo, input };
