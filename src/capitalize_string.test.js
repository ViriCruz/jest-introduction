const capitalize = require('./capitalize_string')

test('return capitalize string', () => {
  expect(capitalize('string')).toEqual('String')
})