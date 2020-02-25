const functions = require('./functions')

test('return capitalize string', () => {
  expect(functions.capitalizeString('string')).toEqual('String')
})

test('return reversed string', () => {
  expect(functions.reverseString('string')).toEqual('gnirts')
})

test('return the sum between 2 and 2', () => {
  expect(functions.calculator(2, 2).add()).toEqual(4)
})

test('return the substraction between 2 and 2', () => {
  expect(functions.calculator(2, 2).subtract()).toEqual(0)
})

test('return the division between 2 and 2', () => {
  expect(functions.calculator(2, 2).divide()).toEqual(1)
})

test('return the multiplication between 2 and 2', () => {
  expect(functions.calculator(2, 2).multiply()).toEqual(4)
})