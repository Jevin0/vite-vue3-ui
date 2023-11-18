import {isArrayLike} from '../array'

export function isObjectLike (value) {
  return typeof value === 'object' && value !== null && !isArrayLike(value)
}

// isObjectLike({})
// // => true
//
// isObjectLike([1, 2, 3])
// // => false
//
// isObjectLike(Function)
// // => false
//
// isObjectLike(null)
// // => false
