// 判断一个值是否是一个有效的array-like对象的length属性
// 是数字且大于0小于Number.MAX_SAFE_INTEGER的整数

const MAX_SAFE_INTEGER = 9007199254740991

export function isLength (value) {
  return typeof value === 'number' &&
    value > -1 && value % 1 === 0 && value <= MAX_SAFE_INTEGER
}

