import isLikeArray from './_/isLikeArray'

// 判断一个值是否是一个array-like
// 规则：不等于null，不是function类型，并且有length属性，length是大于0小于Number.MAX_SAFE_INTEGER的整数
function isArrayLike (value) {
  return !!isLikeArray(value)
}

export default isArrayLike

// isArrayLike(null)
// // => false
//
// isArrayLike([])
// // => true
//
// isArrayLike(document.body.children)
// // => true
