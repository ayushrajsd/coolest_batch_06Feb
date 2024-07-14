Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(1), 1000)),
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