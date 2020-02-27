function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

const calculator = (a, b) => {
  const add = () => a + b;
  const subtract = () => a - b;
  const divide = () => a / b;
  const multiply = () => a * b;

  return {
    add,
    subtract,
    divide,
    multiply,
  };
};

const cipher = (string, shift) => {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  const phraseSplit = () => string.toLowerCase().split('');
  const ceasar = () => {
    let cipherString = '';
    phraseSplit().forEach((item) => {
      const index = alphabet.indexOf(item);
      if (index > -1) {
        const position = (index + shift) > alphabet.length - 1
          ? (index + shift) - alphabet.length : (index + shift);
        cipherString += alphabet[position];
      } else {
        cipherString += item;
      }
    });
    return cipherString;
  };
  return {
    ceasar,
  };
};

const analyze = (arr) => {
  const average = () => arr.reduce((a, i) => (a + i))/arr.length;
  const min = () => Math.min(...arr);
  const max = () => Math.max(...arr);
  const length = () => arr.length;

  return {
    average: average(),
    min: min(),
    max: max(),
    length: length(),
  };
};

module.exports = {
  capitalizeString,
  reverseString,
  calculator,
  cipher,
  analyze,
};
