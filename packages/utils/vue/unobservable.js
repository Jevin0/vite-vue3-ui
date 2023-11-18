import {isArrayLike} from '../array'
import {isObjectLike} from '../object'
// import getVue from './getVue'

export function unobservable (value) {
  if (isArrayLike(value) || isObjectLike(value)) {
    Object.defineProperty(value, '__v_skip', {
      value: 'UIF',
      enumerable: false,
      writable: true,
      configurable: true
    })
  }
  if (value && value.__ob__) {
    delete value.__ob__
  }
  return value
}



//
// const object = { a: 1 }
//
// console.log(unobservable(object))
//
// delete object.__v_skip
//
// console.log(getVue().observable(object))
