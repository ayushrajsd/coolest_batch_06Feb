Function.prototype.myBind = function(context, ...boundArgs){
    if(typeof this !== "function"){
        throw new Error(this+ "is not callable")
    }
    const targetFunction = this
   return function(...args){
   return targetFunction.apply(context,[...boundArgs, ...args])
   } 
}

const user = {
    name:"Alice",
    age:25,
    greet: function(hobby, msg){
        console.log(`Hello, my name is ${this.name} and I loive ${hobby} and I am ${this.age} years old and I say ${msg}`);
    }
}

const user2 = {
    name:"Bob",
    age:30
}

const boundGreet = user.greet.myBind(user,"coding")
boundGreet("hello")

// user.greet("coding","hello")