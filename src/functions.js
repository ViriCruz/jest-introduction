function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = (a, b) => {
  const add = () => a + b
  const subtract = () => a - b
  const divide = () => a / b
  const multiply = () => a * b

  return {
    add,
    subtract,
    divide,
    multiply
  }
}

module.exports = {
  capitalizeString,
  reverseString,
  calculator
}
