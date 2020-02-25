const functions = require('./functions');

test('return capitalize string', () => {
  expect(functions.capitalizeString('string')).toEqual('String');
});

test('return reversed string', () => {
  expect(functions.reverseString('string')).toEqual('gnirts');
});

test('return the sum between 2 and 2', () => {
  expect(functions.calculator(2, 2).add()).toEqual(4);
});

test('return the substraction between 2 and 2', () => {
  expect(functions.calculator(2, 2).subtract()).toEqual(0);
});

test('return the division between 2 and 2', () => {
  expect(functions.calculator(2, 2).divide()).toEqual(1);
});

test('return the multiplication between 2 and 2', () => {
  expect(functions.calculator(2, 2).multiply()).toEqual(4);
});

test('using punctuation marks', () => {
  expect(functions.cipher('helló world.', 1).ceasar()).toEqual('ifmmó xpsme.');
});

test('return encrypted alphabet', () => {
  expect(functions.cipher('abcdefghijklmnopqrstuvwxyz', 1).ceasar()).toEqual('bcdefghijklmnopqrstuvwxyza');
});

test('key is greater than alphabet length', () => {
  expect(functions.cipher('helló world.', 10).ceasar()).toEqual('rovvó gybvn.');
});

test('return and object with average, min, max, length', () => {
  expect(functions.analyze([1, 2, 3])).toEqual({
    average: 2, min: 1, max: 3, length: 3,
  });
});
