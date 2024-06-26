import test from 'ava';
import intcode from './intcode';

test('sample program 1', t => {
  t.deepEqual(intcode([1, 0, 0, 0, 99]), [2, 0, 0, 0, 99]);
});
test('sample program 2', t => {
  t.deepEqual(intcode([2, 3, 0, 3, 99]), [2, 3, 0, 6, 99]);
});
test('sample program 3', t => {
  t.deepEqual(intcode([2, 4, 4, 5, 99, 0]), [2, 4, 4, 5, 99, 9801]);
});
test('sample program 4', t => {
  t.deepEqual(
    intcode([1, 1, 1, 4, 99, 5, 6, 0, 99]),
    [30, 1, 1, 4, 2, 5, 6, 0, 99]
  );
});
