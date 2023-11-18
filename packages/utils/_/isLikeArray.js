import isLength from './isLength'

// 判断一个值是否是一个array-like
// 规则：不等于null，
// 规则：不是string类型
// 规则：不是function类型
// 规则：有length属性，length是大于0小于Number.MAX_SAFE_INTEGER的整数
export function isLikeArray (value) {
  return value && typeof value !== 'string' && typeof value !== 'function' && isLength(value.length)
}
