import { readFileSync } from 'fs';
import intcode from './intcode';

const input = readFileSync('./input', 'utf-8');

const inputProgram = input.split(',').map(Number);

function part1() {
  const program = [...inputProgram];
  program[1] = 12;
  program[2] = 2;
  return intcode(program)[0];
}

function part2() {
  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      const program = [...inputProgram];
      program[1] = noun;
      program[2] = verb;
      if (intcode(program)[0] === 19690720) {
        return 100 * noun + verb;
      }
    }
  }
}

console.log('Part 1:', part1());
console.log('Part 2:', part2());
