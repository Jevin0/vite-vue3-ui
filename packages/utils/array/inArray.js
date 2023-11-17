import toArray from './toArray'

function inArray (array, value) {
  return toArray(array).some(val => val === value)
}

export default inArray

// inArray([0], 1)
// // => false
//
// inArray([1], 1)
// // => false
