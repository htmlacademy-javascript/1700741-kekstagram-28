/**
 * Проверит, подходит ли строка по длине.
 * @param {string} target
 * @param {number} length
 * @return {boolean}
 */
const fitsLength = (target, length) => target.length <= length;

fitsLength('проверяемая строка', 10);

/**
 * Проверит, является ли строка (или число) палиндромом.
 * @param {string|number} target
 * @return {boolean}
 * @see https://en.wikipedia.org/wiki/Palindrome
 */
const isPalindrome = (target) => {
  const normalized = String(target).replaceAll(' ', '').toLowerCase();
  const reversed = normalized.split('').reverse().join('');

  return normalized === reversed;
};

isPalindrome('Лёша на полке клопа нашёл ');

/**
 * Извлечёт из строки (или числа) цифры от 0 до 9.
 * @param {string|number} target
 * @return {number}
 */
const parseDigits = (target) => {
  const digits = String(target).replace(/[^0-9]/g, '');

  return digits ? Number(digits) : NaN;
};

parseDigits('1 кефир, 0.5 батона');

/**
 * Добавит в начало строки символы другой строки.
 * В результате исходная строка достигнет заданной длины.
 * @param {string} target
 * @param {number} length
 * @param {string} pad
 * @return {string}
 */
const padStart = (target, length, pad) => {
  const start = pad.repeat(length);

  return `${start}${target}`.slice(-length);
};

padStart('1', 4, '0');


// /**
//  *
//  * @param {string} string
//  * @param {number} checkLength
//  */

// const checkLengthString = (string, checkLength) => (string.length <= checkLength);

// checkLengthString('hello', 20);
// checkLengthString('hello', 4);

// /**
//  *
//  * @param {string} string
//  */

// const checkPalindrome = (string) => {
//   const symbols = string.toLowerCase().split('');

//   const letters = symbols.filter((symbol) => (symbol !== ' '));

//   for (let i = 0; i <= letters.length / 2; i++) {

//     if (letters[i] !== letters[(letters.length - 1 - i)]) {
//       return false;
//     }
//   }
//   return true;
// };
// checkPalindrome('Hello mama');

// /**
//  *
//  * @param {*} string
//  */
// const extractNumbers = (string) => {

//   const stringConverted = (typeof(string) === 'number') ? String(string) : string ;

//   const arrayNumbers = [];

//   for (let i = 0; i < stringConverted.length; i++) {
//     if (!isNaN(parseInt(stringConverted[i], 10))) {
//       arrayNumbers.push(stringConverted[i]);
//     }
//   }

//   const finishNumber = Number(arrayNumbers.join(''));
//   return (finishNumber === 0) ? NaN : finishNumber;
// };

// extractNumbers('hello154');


// const createAddressFiles = (string, minLength, addSymbol) => {

//   let addressFile = '';
//   let finishAddSymbol = '';

//   if (addSymbol.length + string.length >= minLength) {
//     addressFile = `${addSymbol.substr(0, (minLength - string.length))}${string}`;
//     return addressFile;
//   }

//   for (let i = 0; i < (minLength - addSymbol.length - string.length); i++) {
//     finishAddSymbol += addSymbol[i];
//   }

//   addressFile = finishAddSymbol + addSymbol + string;

//   return addressFile;
// };

// createAddressFiles('aa', 4, 'bbb');
