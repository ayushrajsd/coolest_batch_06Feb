const squareArr = []
for(let i = 0; i < arr.length; i++){
    squareArr.push(arr[i] * arr[i])
}
console.log(squareArr) // [1, 4, 9, 16, 25]

const arr2 = [11, 22, 33, 44, 55];
const squaredValues = arr2.map(function (num) {
    console.log(num);
  return num * num;
});

console.log(squaredValues); // [1, 4, 9, 16, 25]


const transactions2 = [1000,2000,300,4000] // in INR
const inrToUsd = 80

const conversionToDollars = transactions2.map(function(amount){
    return `${amount / inrToUsd} $`
})
console.log(conversionToDollars) // [12.5, 25, 3.75, 50]

/**
 * filter
 */

const myArr = [1,2,5,7,8,2,6,9,13,17]

const evenArray = myArr.filter(function(num){
    return num % 2 === 0
})

console.log(evenArray) // [2, 8, 2, 6]

const transactions = [1000,2000,-898, 300,4000,-4500] 
const positiveTransactions = transactions.filter(function(amount){
    return amount > 0
})
console.log(positiveTransactions) // [1000, 2000, 300, 4000]

/**
 * reduce 
 */

const arr = [1,2,3,4,5]
let sum = 10 //0 + 1 + 2 + 3 + 4 + 5
for(let i = 0; i < arr.length; i++){
    sum += arr[i]
}
console.log("sum is ",sum) 

const totalSum = arr.reduce(function(accumulator, currentValue){
    accumulator = accumulator + currentValue
    return accumulator
},0)

console.log("total using reduce",totalSum)