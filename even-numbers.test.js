// DO NOT CHANGE ANYTHING IN THIS FILE.
// IF YOU CHANGE THE TEST, YOU WILL RECEIVE 0 FOR THIS ASSIGNMENT.

const { getEvenNumbers } = require('./even-numbers');

test('should return "0,2,4,6,8,10" when n=10', () => {
  expect(getEvenNumbers(10)).toEqual('0,2,4,6,8,10');
});

test('should return "0" when n=1', () => {
  expect(getEvenNumbers(1)).toEqual('0');
});

test('should return "0,2" when n=2', () => {
  expect(getEvenNumbers(2)).toEqual('0,2');
});

test('should return "0" when n=0', () => {
  expect(getEvenNumbers(0)).toEqual('0');
});

test('should return "" when n=-1', () => {
  expect(getEvenNumbers(-1)).toEqual('');
});