// const fs = require("fs");

// fs.readFile("f1.txt", function (err, data) {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     // success
//     const processedData = data.toString();
//     fs.writeFile("f2.txt", processedData, function (err) {
//       if (err) {
//         console.log(err);
//         return;
//       } else {
//         console.log("File written successfully");
//       }
//     });
//   }
// });

const coinTossPromise = new Promise(function (resolve, reject) {
  // executr code - async operation
  setTimeout(function () {
    const isHeads = Math.random() > 0.5;
    if (isHeads) {
      // success
      resolve("Heads");
    } else {
      // failure
      reject(
        "Tails- Coin toss resulted in tails, considered as a fail for this example"
      );
    }
  }, 1000);
});

// console.log(coinTossPromise); // pending promise

// consume a promise
/**
 * to consume / use the promise we atach callbacks using .then() . .catch() and .finally()
 */

coinTossPromise
.then(function(result){
    console.log("success msg:",result); // on success / resolve
})
.catch(function(err){
    console.log("Err msgL:",err); // on error / reject
})
.finally(function(){
    console.log("Promise settled"); // always executed
    return "I will always run";
})

const cleanRoom = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function(){
        if (Math.random() < 0.5) {
          resolve("I cleaned the room");
        } else {
          reject("not in the mood to clean the room");
        }
    },3000)
  });
};

const eatFood = function (message) {
  return new Promise(function (resolve, reject) {
    if (Math.random() < 0.5) {
      resolve(message + " I ate the food");
    } else {
      reject("Dont like the food");
    }
  });
};

const getCandy = function (message) {
  return new Promise(function (resolve, reject) {
    resolve(message + " now you get the candy");
  });
};
console.log("I am the first line of the code")
cleanRoom()
  .then(function (result) {
    console.log("first:", result);
    return eatFood(result);
  })
  .then(function (result) {
    console.log("second", result); 
    return getCandy(result);
  })
  .then(function (result) {
    console.log("finsihed" + result);
  })
  .catch(function (err) {
    console.log("second Error:", err);
  })

  .finally(function () {
    console.log("All done");
  });

  console.log("I am the last line of the code")
