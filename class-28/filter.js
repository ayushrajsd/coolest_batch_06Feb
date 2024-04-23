if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (callback, thisArg) {
    // step 1 - throw error if callback is not a function
    if (typeof callback !== "function") {
      throw new TypeError(`${callback} is not a function`);
    }
    const result = [];
    // step 3 - loop through the input array
    for (let i = 0; i < this.length; i++) {
      // check if the current index is present in the array
      if (i in this) {
        const context = thisArg ? thisArg : this;
        const result = callback.call(context, this[i], i, this);
        if (result === 0 || result) {
          result.push(this[i]);
        }
      }
    }
    return result;
  };
}

const arr = [1, 2, 3, 4];
const res = arr.filter((item) => item > 2);
console.log(res); // [3,4]

const res1 = arr.myFilter((item) => item > 2);
console.log(res1); // [3,4]
