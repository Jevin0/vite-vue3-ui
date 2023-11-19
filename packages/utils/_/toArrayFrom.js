import {isLikeArray} from './isLikeArray'

// 类数组转换成数组
export function toArrayFrom (array, index) {
  const args = []
  if (isLikeArray(array)) {
    for (let i = index; i < array.length; i++) {
      args.push(array[i])
    }
  }
  return args
}
