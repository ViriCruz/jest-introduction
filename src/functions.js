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

const cipher = (string, shift) => {
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s", "t", "u","v","w","x","y","z"];
  
  const phraseSplit = () => string.split('')
  const ceasar = () => {
    let cipherString = ''  
    phraseSplit().forEach((item) => {
      let index = alphabet.indexOf(item)
      if (index > -1) {

        let position = (index + shift) > alphabet.length - 1 ? (index + shift) - alphabet.length : (index + shift)
        cipherString += alphabet[position]
      } else {
        cipherString += item
      }
    })
    return cipherString
  }
  return {
    ceasar
  }
}

module.exports = {
  capitalizeString,
  reverseString,
  calculator,
  cipher
}
