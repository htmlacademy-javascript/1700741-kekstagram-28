
/**
 * @template Item
 * @param {Item[]} list
 * @return {Item}
 */
const pickItemFromList = (list) => {
  const index = Math.floor(Math.random() * list.length);

  return list[index];
};

/**
 * @param {number} min
 * @param {number} max
 * @return {number}
 * @see https://en.wikipedia.org/wiki/Linear_interpolation
 */
const pickIntegerInRange = (min, max) => {
  const value = min + Math.random() * (max - min);

  return Math.round(value);
};

export {pickItemFromList, pickIntegerInRange};
