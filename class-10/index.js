
console.log(a) // undefined -> hoisting
test() // no issue
var a = 10
function test(){
    console.log("this is a test function")
}

function greet(){
    var msg = "Happy New Year!"
    sayHNW()
    function sayHNW(){
        var val = "123"
        console.log("inner",msg,val)
    }
    // console.log(msg)
}
greet()
console.log("outer",msg)


function parent(){
    var a = 20
    function child(){
        console.log(a)
        function child2(){ // lexical -> position
            console.log(a)
        }
        child2()
    }
    child()
}

parent()


// // {
// //     // this is a standalone block
// // }

// if(true){
//     // this is a standalone block inside an if statement
// }

if(true){
    let blockScopedVariable = "i am inside an if block"
    console.log(blockScopedVariable)
}
// console.log(blockScopedVariable)

function test(){
    console.log(val)
    if(true){
        var val = 123
        console.log(val)
    }
}

// console.log(val)
test()

var val = 'some msg'
if(true){
    let val = 'some other msg' // shadowing -> block scoped
    console.log(val)    
}
console.log("outside if",val)


function grandMa(){
    const secret = 'Maggi Masala'
    const unusedVal = 123
    function bitti(){
        console.log("I know the secret",secret) // closure over grandMa
    }
    console.log(unusedVal)
    return bitti // first class citizens
}
const recipe = grandMa() // bitti
/**
 * thousandass of lines of code
 */
recipe()

/**
 * closure - nothing but a function bundled with its lexical scope
 */

/**
 * function createCounter
 * local variable count -> 0
 * return function
 * whenever returned function is called , it should increment the count
 */

function createCounter(){
    // your code here
    return function inner(){
        let count = 0
        count += 1
        return count
    }
}

const counter = createCounter() // return function
console.log(counter) 
const counter2 = createCounter()

console.log(counter()) // 1
console.log(counter()) // 2





console.log(counter2()) // 1
console.log(counter2()) // 2
console.log(counter2()) // 3
