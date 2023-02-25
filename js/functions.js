/**
 *
 * @param {string} string
 * @param {number} checkLength
 */

const checkLengthString = (string, checkLength) => (string.length <= checkLength);

checkLengthString('hello', 20);
checkLengthString('hello', 4);

/**
 *
 * @param {string} string
 */

const checkPalindrome = (string) => {
  const symbols = string.toLowerCase().split('');

  const letters = symbols.filter((symbol) => (symbol !== ' '));

  for (let i = 0; i <= letters.length / 2; i++) {

    if (letters[i] !== letters[(letters.length - 1 - i)]) {
      return false;
    }
  }
  return true;
};
checkPalindrome('Hello mama');

/**
 *
 * @param {*} string
 */
const extractNumbers = (string) => {

  const stringConverted = (typeof(string) === 'number') ? String(string) : string ;

  const arrayNumbers = [];

  for (let i = 0; i < stringConverted.length; i++) {
    if (!isNaN(parseInt(stringConverted[i], 10))) {
      arrayNumbers.push(stringConverted[i]);
    }
  }

  const finishNumber = Number(arrayNumbers.join(''));
  return (finishNumber === 0) ? NaN : finishNumber;
};

extractNumbers('hello154');


const createAddressFiles = (string, minLength, addSymbol) => {

  let addressFile = '';
  let finishAddSymbol = '';

  if (addSymbol.length + string.length >= minLength) {
    addressFile = `${addSymbol.substr(0, (minLength - string.length))}${string}`;
    return addressFile;
  }

  for (let i = 0; i < (minLength - addSymbol.length - string.length); i++) {
    finishAddSymbol += addSymbol[i];
  }

  addressFile = finishAddSymbol + addSymbol + string;

  return addressFile;
};

createAddressFiles('aa', 4, 'bbb');
