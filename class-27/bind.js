const user = {
    name:"Alice",
    age:25,
    greet: function(msg){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old and I say ${msg}`);
    }
}

const user2 = {
    name:"Bob",
    age:30
}

const boundGreet = user.greet.bind(user)
const boundGreet2 = user.greet.bind(user2)
console.log(boundGreet)

/***
 * thoudands of lines of code
 */
boundGreet("hello")
boundGreet2("hello")