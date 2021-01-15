const assert = require('assert');

// Ex-1

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

assert.strictEqual(sum(4, 5), 9);
assert.strictEqual(sum(0, 0), 0);
assert.throws(() => {sum(4,'5')}, /^Error: parameters must be numbers$/);

// Ex - 2

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

let arr1 = [1, 2, 3, 4];
myRemove(arr1, 3);
assert.deepStrictEqual(arr1, [1, 2, 3, 4]);

assert.deepStrictEqual(myRemove(arr1, 5), [1, 2, 3, 4]);