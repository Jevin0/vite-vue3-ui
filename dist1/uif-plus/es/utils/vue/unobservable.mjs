import { isArrayLike } from '../array/isArrayLike.mjs';
import { isObjectLike } from '../object/isObjectLike.mjs';

function unobservable(value) {
  if (isArrayLike(value) || isObjectLike(value)) {
    Object.defineProperty(value, "__v_skip", {
      value: "UIF",
      enumerable: false,
      writable: true,
      configurable: true
    });
  }
  if (value && value.__ob__) {
    delete value.__ob__;
  }
  return value;
}

export { unobservable };
//# sourceMappingURL=unobservable.mjs.map
