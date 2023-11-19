import { toArray } from './toArray.mjs';

function inArray(array, value) {
  return toArray(array).some((val) => val === value);
}

export { inArray };
//# sourceMappingURL=inArray.mjs.map
