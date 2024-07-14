/**
 * call promise.all when all input promises are resolved
 * in other words call the resolve callback when all input promises are resolved
 * count
 */

Promise.myall = function (values) {
  const promise = new Promise((resolve, reject) => {
    const result = []; // to store the resolved values
    let total = 0; // to keep track of the number of resolved promises
    values.forEach((item, index) => {
      Promise.resolve(item)
        .then((res) => {
          result[index] = res;
          total++;
          if (total === values.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
  return promise;
};

let promise1 = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
let promise2 = [
  Promise.resolve(10),
  Promise.reject(new Error("Failed").message),
  Promise.resolve(30),
];

Promise.myall(promise1)
  .then((result) => {
    console.log("Result: ", result);
  })
  .catch((error) => {
    console.error("Error: ", error);
  });
