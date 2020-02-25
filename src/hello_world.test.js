const helloWorld = require('./hello_world')

test('return Hello world', () => {
  expect(helloWorld()).toBe('Hello world');
});