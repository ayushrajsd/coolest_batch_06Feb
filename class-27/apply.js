// const person1 = {
//     name:"Mr. X",
//     age:25,
//     describe: function(location, hobby){
//         console.log(`My name is ${this.name} and I am ${this.age} years old and I live in ${location} and I love ${hobby}`);
//     }
// }

// person1.describe("New Delhi", "Coding")

// const person2 = {
//     name:"Mr. Y",
//     age:30
// }

// person1.describe.apply(person2, ["San Fransisco", "Travelling"])

const numbers = [5,6,2,3,7]
console.log(...numbers)

console.log(Math.max.apply(null, numbers))
console.log(Math.max(null, ...numbers))
console.log(Math.max.call(null, ...numbers))