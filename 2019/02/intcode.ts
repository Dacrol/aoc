export default function intcode(program: number[]): number[] {
  let position = 0;
  while (program[position] !== 99 && position < program.length) {
    const opcode = program[position];
    const a = program[program[position + 1]];
    const b = program[program[position + 2]];
    const target = program[position + 3];
    if (opcode === 1) {
      program[target] = a + b;
    } else if (opcode === 2) {
      program[target] = a * b;
    }
    position += 4;
  }
  return program;
}
