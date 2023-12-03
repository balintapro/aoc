import fs from 'fs';
const txt = require.resolve('./input.txt');

// utils
const input = fs.readFileSync(txt, 'utf8').split('\n');
const max: { [key: string]: number } = {
    red: 12,
    green: 13,
    blue: 14,
};

function normaliseRounds(rounds: string[]) {
    return rounds.map((round: string) =>
        round.split(',').map((dice: string) => {
            const [value, color] = dice.trim().split(' ');

            return { color, value };
        })
    );
};

// part one
function partOne(games: any[] | undefined) {
    let validGameidSum: number = 0;

    games?.forEach((game: string, index) => {
        const rounds = game.split(':')[1].split(';');
        const isRoundValid = normaliseRounds(rounds).every((color: any[]) =>
            color.every((die: any) => max[die.color] >= parseInt(die.value))
        );

        if (isRoundValid) {
            validGameidSum += index + 1;
        }
    });

    return validGameidSum;
};

// part two
function partTwo(games: any[] | undefined) {
    let validGameidSum: number = 0;

    (games as string[]).forEach((game: string) => {
        const rounds = game.split(':')[1].split(';');
        let min: { [key: string]: number } = {
            red: 0,
            green: 0,
            blue: 0,
        };

        normaliseRounds(rounds).forEach((color: any[]) => {
            color.forEach((die: any) => {
                if (min[die.color] < parseInt(die.value)) {
                    min[die.color] = parseInt(die.value);
                }
            });
        });

        validGameidSum += Object.values(min).reduce((p, n) => p * n, 1);
    });

    return validGameidSum;
};

// console.log("day: 02, part 01: ", partOne(input));
// console.log("day: 02, part 02: ", partTwo(input));

export { partOne, partTwo, input };
