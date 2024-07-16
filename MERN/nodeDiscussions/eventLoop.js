console.log("start");

process.nextTick(() => {
  console.log("next tick");
});

setImmediate(() => {
  console.log("set immediate");
});

console.log("end");

function heavyComputation(iterations, callback) {
  let count = 0;
  function compute() {
    for (let i = 0; i < iterations; i++) {
      count++;
      if (count >= iterations) {
        // count -> 0 to 9999
        callback();
        return;
      }
    }
  }
  compute();
}
heavyComputation(10000, () => {
  console.log("Heavy computation complete");
});

/// optimised way
function heavyComputation(iterations, callback) {
  let count = 0;
  function compute() {
    for (let i = 0; i < 1000; i++) {
      // breaking the iterations into smaller chunks
      if (++count >= iterations) {
        callback();
        return;
      }
    }
    process.nextTick(compute);
  }
  compute();
}
heavyComputation(10000, () => {
  console.log("Heavy computation complete");
});
