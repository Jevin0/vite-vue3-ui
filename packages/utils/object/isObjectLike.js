import isArrayLike from '../array/isArrayLike'

function isObjectLike (value) {
  return typeof value === 'object' && value !== null && !isArrayLike(value)
}

export default isObjectLike

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
