import {toArrayFrom} from '../_'

// 类数组转换成数组
export function toArray (array) {
  return toArrayFrom(array, 0)
}

// toArray(2)
// // => []
//
// toArray([2])
// // => [2]
//
// toArray(document.body.children)
// // => [Element, Element]
