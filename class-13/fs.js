const fs = require("fs");

const f1p = fs.promises.readFile("f1.txt");
console.log("before");
f1p
  .then(function (data) {
    console.log("this is file data ->" + data); // file 1 reading is done here
    return fs.promises.readFile("f2.txt");
  })
  .then(function (data) {
    console.log("this is file data ->" + data); // file 2 reading is done here
    return fs.promises.readFile("f3.txt");
  })
  .then(function (data) {
    console.log("this is file data ->" + data); // file 3 reading is done here
  });

console.log("after");

// fs.readFile("f1.txt", cb)

// function cb(err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data + "");
//     }
// }

// const promiseReadFile2 = fs.promises.readFile("f2.txt");
// const promiseReadFile3 = fs.promises.readFile("f3.txt");

// function readFileCallback(data){
//     console.log("this is the data ->" + data)
// }

// function handleError(err){
//     console.log("this is my error ->" + err)
// }

// promiseReadFile.then(readFileCallback).catch(handleError)
// promiseReadFile2.then(readFileCallback).catch(handleError)
// promiseReadFile3.then(readFileCallback).catch(handleError)

// promiseReadFile.then(function(data){
//     console.log("this is file data 1 ->"+data)
// })
// promiseReadFile.catch(function(err){
//     console.log("this is your error ->"+ err)
// })

// // for file 2
// promiseReadFile2.then(function(data){
//     console.log("this is file data 2 ->"+data)
// })
// promiseReadFile2.catch(function(err){
//     console.log("this is your error ->"+ err)
// })

// // for file 3
// promiseReadFile3.then(function(data){
//     console.log("this is file data 3 ->"+data)
// })
// promiseReadFile3.catch(function(err){
//     console.log("this is your error ->"+ err)
// })
