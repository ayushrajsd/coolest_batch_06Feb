const car = {
    name:"Mercedes",
    color:"White"
}

function buyCar(price){
    console.log(`I bought a ${this.color} ${this.name} car for ${price}`)
}

buyCar.apply(car, [5000000]) // I bought a White Mercedes car for 5000000

Function.prototype.myApply = function(context={},argsArray=[]){
    if(typeof this !== "function"){
        throw new Error(this+ "is not callable")
    }

    if(!Array.isArray(argsArray)){
        throw new Error(this+"we need an array as second argument")
    }

    /**
     * car.myFunction = buyCar
     */
    context.myFunction = this
    /**
     * car.myFunction(5000000)
     */
    context.myFunction(...argsArray) // sprad the array and invoking the function
}

buyCar.myApply(car, [5000000]) // I bought a White Mercedes car for 5000000
buyCar.apply(car, [5000000]) // I bought a White Mercedes car for 5000000