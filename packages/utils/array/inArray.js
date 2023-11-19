import {toArray} from './toArray'

export function inArray (array, value) {
  return toArray(array).some(val => val === value)
}

// inArray([0], 1)
// // => false
//
// inArray([1], 1)
// // => false
