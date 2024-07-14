/*** node environment */
console.log("Scenario 1")
console.log(this) // {} -> module.exports

const obj2 = {
    a: 1,
    b:2
}
console.log(obj2.a)

console.log("scenario 2")
function fnGlobal(){
    console.log(this) // global object
}
fnGlobal()

console.log("scenario 3")
const obj = {
    fn: function(){
        console.log(this == obj) // obj
    }
}


obj.fn() // method invocation

console.log("scenario 4")
const obj3 = {
    a: 1,
    fn: function(){
        console.log(this); // obj3
        const nestedFn = function(){
            console.log(this.a) // global object
        }
        nestedFn() // normal invocation
    }
}
obj3.fn() // method invocation


// }