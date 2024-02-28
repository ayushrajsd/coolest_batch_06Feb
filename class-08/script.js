// console.log("Hello World! from script.js file")

// var myFirstVariable = "Hello from my first variable"
// console.log(myFirstVariable)
// myFirstVariable = true
// console.log("changed data", myFirstVariable)

// /** redeclaration */

// var myFirstVariable = "another variable"
// console.log(myFirstVariable)

// /**
//  * summarise
//  * var - redeclare and reinitialise
//  */

// /** 
//  * ES6 - 2015 
//  * let and const
//  */

// let val = "hello"
// val = "bye"
// // let val = "sonme other value"// redeclaration not allowed
// console.log(val)

// const pi = 3.14
// // pi= 3.15 // reassignment not allowed
// console.log(pi)

/**
 * Datatypes in JS
 * 1. number
 * 2. bigint
 * 3. string
 * 4. booolean
 * 5. null
 * 6. undefined
 * 7.symbol
 * 8. Object
 * 
 */

// let value = 'hello'
// value = 1234

// /** Number type */
// let number1 = 12
// let number2 = 12.345
// // Infinity and NaN
// console.log(11/0)
// console.log("string"/100)
// console.log("mr. Ambani net worth is 100bn",100_000_000_000 + 102000)
// console.log("Mr.musk's net worth is 200bn",2e11)
// console.log("millionth of a second 10^-6",1e-6)
// console.log(10+"123") // if one of the operand is string and we use + operator then it will concatenate
// console.log(+"123"+10)
// console.log("123"-10)

/** bigint
 * number type can represent numbers from -(2^53-1) to 2^53-1 ( 64 bit memory representation)
 * bigint can represent numbers beyond this range
 * represent bigint by adding n at the end of the number 1n , 2n
 */

/** 
 * string
 * 
 * 1. single quotes - 'heelo'
 * 2. double quotes - "hello"
 * 3. backticks
 */

// const activeUsers = 10000
// const message = `There are ${activeUsers} users online`
// const message2 = "there are " + activeUsers + " users online"
// console.log(message)
// console.log(message2)

/**
 * boolean - true and false
 */

// console.log( 1 < 2)

// const val = "hello"
// if(val){
//     console.log("val is present")
// }else{
//     console.log("val is not present")
// }

/**
 * null and undefined
 * 
 */

// var a
// console.log(a)
// a = 10

// var temp = null
// if(temp){
//     console.log("temp is present")
// }else{
//     console.log("temp is not present")
//     temp= 10
// }

// objects
// const user = new Object()

// console.log(user)
// const anotherUser = {}
// console.log(anotherUser)

// const user = {
//     name:"kohli",
//     age:34,
//     address:{
//         city:"delhi",
//         country:"india"
    
//     }
// }
// // const years = user.age
// // user["years"] = years
// // delete user.age

// user.isTopRanked = true

// console.log(user)

// delete user.age
// console.log(user)
// // adding a multi word property
// const key = "man of match"
// user[key] = true
// user["man of series"] = true

// console.log(user)

// typeof operator

// console.log(typeof undefined)
// console.log(typeof 0)
// console.log(typeof true)
// console.log(typeof '0')
// console.log(typeof Symbol('id'))
// console.log(typeof function(){})
// console.log(typeof null)


// /** arrays */

// const arr = [1,2,3,4,5]
// const arr2 = [1, function(){},"hello",true,"unity in diversity"]
// console.log(typeof arr2)
// console.log(arr.length)

/**
 * functions
 */

function myFirstFunction(name){
    // name = "Mr. X"
    var name = "Mr. X"

    console.log(`hello ${name } from my first function`)
}
myFirstFunction("JS")