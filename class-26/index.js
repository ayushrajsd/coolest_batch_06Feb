// // //  const obj = {}
// // // console.log(obj.toString())

// // // const arr = [1,2,3]
// // // console.log(arr.join("->"))

// // // const user = {
// // //     name:'Kohli',
// // //     age:34
// // // }

// // // console.log(user)

// // // const arr = [1,2,3]
// // // console.log(arr)

// const animal = {
//   eats: true,
//   sleep: true,
//   walk() {
//     console.log("the animal walk");
//   },
// };

// console.log(animal);

// // const rabbit = {
// //     areCute: true
// // }

// // rabbit.__proto__ = animal

// // console.log(rabbit.walk())

// // const herbivore = {
// //   eatMeat: "naah",
// //   __proto__: animal,
// // };

// // const carnivore = {
// //   eatMeat: "yes",
// //   __proto__: animal,
// // };

// // const rabbit = {
// //   canJump: true,
// //   __proto__: herbivore,
// // };

// // const tiger = {
// //   canKill: true,
// //   __proto__: carnivore,
// // };
// // console.log(rabbit);

// // console.log("rabbit eats meat", rabbit.eatMeat);
// // console.log("tiger eats meat", tiger.eatMeat);
// // console.log(rabbit.__proto__.__proto__.__proto__.__proto__); // prototype chain

// // // // console.log(typeof null)

// // // traversing keys of object
// // console.log(Object.keys(animal)); // Object.keys will give direct keys of object

// // // for .. in loop is used to loop over all the keys of object
// // for (let key in rabbit) {
// //   if (rabbit.hasOwnProperty(key)) {
// //     console.log("direct key",key);
// //   }
// // }

// // const obj = {

// // }
// // console.log(obj) // [object Object]

// // const arr = [1,2,3]
// // console.log(arr) // [1,2,3]

// /** adding methods on prototypes */

// // function User(name){
// //     this.name = name
// //     this.msg = function(){
// //         console.log("Hello",this.name)
// //     }
// // }

// // const user1 = new User("Kohli")
// // const user2 = new User("Dhoni")

// // console.log("comparing methods",user1.msg === user2.msg)

// // function BetterUser(name){
// //     this.name = name
// // }
// // /**
// //  * all function in javascript have a property called prototype
// //  */
// // BetterUser.prototype.msg = function(){
// //     console.log("Hello, how are you",this.name)
// // }

// // const user3 = new BetterUser("Shubman")
// // const user4 = new BetterUser("Rohit")

// // console.log("comparing methods",user3.msg === user4.msg)

// // /**
// //  * Other built in prototypes
// //  */

// // const arr = [1,2,3] // new Array(1,2,3)
// // const str = "hrllo world" // new String("hello world")

// // /**
// //  * Primitives
// //  */

// // const num = 1.123123 // new Number(1.123123) -> Number Prototype
// // console.log(num)
// // console.log(num.toFixed(2))

// // const str1 = "hello world" // new String("hello world") -> String Prototype
// // console.log(str1.toUpperCase())

// /**
//  * Question: given an input string and a pattern, separate the letters by pattern
//  * i/p: scaler, pattern: @ ; O/P: s@c@l@e@r
//  * create a method such that all the string can have access to this methd and do the transformation
//  */
// // method -> crazyMethod

// // "ayush".crazyMethod("@") // a@y@u@s@h // new String()
// // "scaler".crazyMethod("@") // s@c@a@l@e@r
// // console.log("aysuh".toUpperCase())

// // String.prototype.crazyMethod = function(pattern){
// //     return this.split("").join(pattern)
// // }

// // console.log("scaler".crazyMethod("@"))
// // console.log("scaler".crazyMethod("*"))
// // console.log("scaler".crazyMethod("<3"))

// // Object.create
// // define the prototype of object
// // const carProtoType = {
// //     displayInfo: function(){
// //         return `This is a ${this.year} ${this.model}`
// //     }
// // }

// // const car1 = Object.create(carProtoType) // car1 prototype -> carProtoType
// // car1.model = "Toyoyta Camry"
// // car1.year = 2021

// // const car2 = Object.create(carProtoType) // car2 prototype -> carProtoType
// // car2.model = "Ford Mustang"
// // car2.year = 2023

// // console.log(car1.displayInfo())
// // console.log(car2.displayInfo())

// const obj = {
//   name: "Sample Object",
// };

// obj.__proto__ = null; // break the prototype chain
// // console.log(obj.toString()) // error

// // function Animal(){
// // this.eats = true
// // }

// // console.log(Animal.prototype.constructor)

// // const rabbit = new Animal()
// // console.log("rabbit",rabbit instanceof Animal)

// // Question
// function Animal() {}

// Animal.prototype.speak = function () {
//   console.log("sound");
// };

// function Dog() {}
// Dog.prototype = Object.create(Animal.prototype); // Dog prototype -> Animal prototype
// Dog.prototype.constructor = Dog; // Dog prototype -> Dog ; resetting the constructor

// const dog = new Dog();
// console.log(dog);
// console.log(dog.constructor.name);

// // Q3
// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true,
// };

// let rabbit = new Rabbit();

// Rabbit.prototype = {}; // new memory reference

// console.log(rabbit.eats)

// const bunny = new Rabbit()
// console.log(bunny.eats) // true

// Q4
const animal = {
    jumps: null,
   };
   const rabbit = {
    __proto__: animal,
    jumps: true,
   };
   
   
   alert(rabbit.jumps); // ? (1)
   
   
   delete rabbit.jumps;
   
   
   alert(rabbit.jumps); // ? (2)
   
   
   delete animal.jumps;
   
   
   alert(rabbit.jumps); // ? (3)
   
