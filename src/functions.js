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

<<<<<<< HEAD
  const phraseSplit = () => string.toLowerCase().split('');
=======
  const phraseSplit = () => string.split('');
  const isUppercase = letter => (letter.toUpperCase() === letter);
>>>>>>> 1c450f80cbf61cac6dd79b0a321677a3977264b3
  const ceasar = () => {
    let cipherString = '';
    phraseSplit().forEach((item) => {
      const uppercase = isUppercase(item);
      const letter = uppercase ? item.toLowerCase() : item;
      const index = alphabet.indexOf(letter);
      if (index > -1) {
        const position = (index + shift) > alphabet.length - 1
          ? (index + shift) - alphabet.length : (index + shift);

        cipherString += uppercase ? alphabet[position].toUpperCase() : alphabet[position];
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
