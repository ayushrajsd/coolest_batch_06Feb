// async function fetchData() {
//   // async function always returns a promise
//   return "data";
// }

// // const dataPromise = fetchData()
// // // console.log(dataPromise) // data

// // dataPromise.then(function(res){
// //     console.log("ans in then block",res)
// // })

// console.log(fetchData());

// async function test() {
//   const data = await fetchData();
//   console.log("data", data);
//   return "value";
// }
// // test();

// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("Promise resolved");
//   }, 10000);
// });
// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("Promise resolved");
//   }, 5000);
// });

// // function fetchData() {
// //   p.then(function (res) {
// //     console.log("Promise resolved", res);
// //     console.log("create impact");
// //   });
// // }

// async function handlePromise() {
//   console.log("Scaler");
//   const val = await p1; // waiting for the resolved data from promise
//   console.log("create impact 1");
//   console.log(val);

//   const val2 = await p2;
//   console.log("create impact 2")
//   console.log(val2)
// }

// // // fetchData()
// handlePromise();

// function test1(){
//     console.log("test1")
// }

// const test2 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("test2")
//     },3000)
// })

// function test3(){
//     console.log("test3")
// }

// async function getData(){
//     const data = await test2
//     console.log(data)
//     console.log("inside async function")
// }

// test1()
// getData()
// test3()

async function placeOrder(drink) {
//   return new Promise(function (resolve, reject) {
    if (drink === "coffee") {
      return ("Order for coffee placed");
    } else {
      throw new Error("We only serve coffee");
    }
//   });
}
// function placeOrder(drink) {
//   return new Promise(function (resolve, reject) {
//     if (drink === "coffee") {
//       resolve("Order for coffee placed");
//     } else {
//       reject("We only serve coffee");
//     }
//   });
// }

function processOrder(orderPlaced) {
  return new Promise(function (resolve, reject) {
    resolve("order placed and served");
    // reject("Order not served");
  });
}

function generateBill(processOrder){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("Bill Generated")
            resolve(`${processOrder} and bill generated with 200 Rs`)
        },3000)
    })
}

// placeOrder("coffee").then(function (orderStatus) {
//   console.log(orderStatus);
//   return processOrder(orderStatus);
// })
// .then(function (processStatus) {
//   console.log(processStatus);
//   return generateBill(processStatus)
// })
// .then(function(bill){
//     console.log(bill)
// })
// .catch(function (err) {
//   console.log("Err:", err);
// });

// placeOrder("tea")
//   .then(function (orderStatus) {
//     console.log(orderStatus);
//   })
//   .catch(function (err) {
//     console.log("Err:", err);
//   });

async function serverOrder(){
    try{
        const orderStatus = await placeOrder("tea")
        console.log("1",orderStatus)
        const processStatus = await processOrder(orderStatus)
        console.log("2",processStatus)
        const bill = await generateBill(processStatus)
        console.log("3",bill)
    }catch(error){
        console.log("Error:",error.message)
    }
}

serverOrder()