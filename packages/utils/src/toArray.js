import toArrayFrom from './_/toArrayFrom'

// 类数组转换成数组
function toArray (array) {
  return toArrayFrom(array, 0)
}

export default toArray

// toArray(2)
// // => []
//
// toArray([2])
// // => [2]
//
// toArray(document.body.children)
// // => [Element, Element]
