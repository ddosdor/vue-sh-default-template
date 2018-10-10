/* Helpers file */
import { xor } from 'lodash';

/**
 * name: hDeepCopy
 *
 * creates deep copy of object (HACK)
 *
 * @param {Object} object
 * @return {Object}
 */
export const hDeepCopy = object => JSON.parse(JSON.stringify(object));

/**
 * name: hToggleArrayItem
 *
 * Creates an array of unique values that is the symmetric difference of the given arrays.
 * The order of result values is determined by the order they occur in the arrays.
 *
 * @param {Array} array
 * @param {any} item
 * @returns {Array} newArray
 */
export const hToggleArrayItem = (array, item) => xor(array, [item]);
