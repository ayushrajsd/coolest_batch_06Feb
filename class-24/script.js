// function Car(make, model) { //  constructor function
//   this.make = make;
//   this.model = model;
//   this.displayInfo = function () {
//     console.log(`Car: ${this.make} ${this.model}`);
//   };
// }

// const myCar = new Car("Toyota", "Corolla");
// myCar.displayInfo(); // Car: Toyota Corolla
'use strict'
console.log("scenario 1")
console.log(this) // window object

console.log("scenario 2")
function exampleFunction(){
    console.log(this) // undefined
}
exampleFunction() 

console.log("scenario 3")
const obj = {
    prop: "I am a property",
    method: function(){
        console.log(this) // obj
        console.log(this.prop)
    }
}
// console.log(obj.prop) // property access
obj.method() // method invocation

console.log("scenario 4")
const obj2 = {
    prop: "I am a property",
    method: function(){
        const nestedFn = function(){
            console.log(this.prop) // undefined
        }
        nestedFn() // normal invocation
    }
}
// window.prop = "sone value"
// obj2.method() // method invocation

const val = {
    a:1
}
console.log(val.b)


const obj4 = {
    fn:function(){
        console.log(this)
    }
}
obj4.fn() // method invocation

const fn = obj4.fn
console.log("scenario 5") // same as scenario 2
fn() // normal invocation this -> global object 