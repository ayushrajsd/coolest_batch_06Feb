// 'use strict'
// function test(){
//     a = 5
//     var b = 10
// }
// // test()
// // console.log(a)
// // console.log(b)

// function abc(a,a){
//     console.log(a)
// }
// abc(1,2)
"use strict";
console.log("Scenario 1");
console.log(this); // {} -> module.exports

console.log("scenario 2");
function fnGlobal() {
  console.log(this); // undefined 
}
fnGlobal(); // normal invocation

console.log("scenario 3");
const obj = {
  fn: function () {
    console.log(this); // obj
  },
};

obj.fn(); // method invocation

console.log("scenario 4")
const obj3 = {
    a: 1,
    fn: function(){
        console.log(this); // obj3
        const nestedFn = function(){
            console.log(this.a) 
        }
        nestedFn() // normal invocation
    }
}
obj3.fn() // method invocation
