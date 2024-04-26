function quickResolve() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Quick Resolve");
    }, 500);
  });
}

function slowResolveOrFastReject() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("fast Reject");
    }, 100);
    setTimeout(() => {
      resolve("Slow Resolve or Fast Reject");
    }, 2000);
  });
}

Promise.race([quickResolve(), slowResolveOrFastReject()])
.then(result=>{
    console.log("Result: ", result);
})
.catch(error=>{
    console.error("Error: ", error);
})
