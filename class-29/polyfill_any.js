Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      this.reject(new AggregateError("No promises to resolve"));
    }
    let rejectedCount = 0;
    const rejections = [];
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        // .then(resolve)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          rejectedCount++;
          rejections[index] = error;
          if (rejectedCount === promises.length) {
            reject(new AggregateError(rejections, "All promises rejected"));
          }
        });
    });
  });

};

Promise.myAny([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(2), 2000)),
    new Promise((resolve, reject) => setTimeout(() => reject(3), 3000)),
    new Promise((resolve, reject) => setTimeout(() => reject(3), 5000))
])
.then(result=>{
    console.log("Result: ", result);
})
.catch(error=>{
    console.error("Error: ", error);
})