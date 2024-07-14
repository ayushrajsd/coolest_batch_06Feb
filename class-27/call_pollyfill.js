const car = {
    name:"Mercedes",
    color:"White"
}



function buyCar(price){
    console.log(`I bought a ${this.color} ${this.name} car for ${price}`)
}
buyCar.call(car, 5000000 ) // this = car

Function.prototype.myCall = function(context={} ,...args){ // rest operator
    console.log("context", this)

    if(typeof this !== "function"){
        throw new TypeError("Error")
    }
    context.myFunction = this // buyCar -> car.myFunction = buyCar
    context.myFunction(...args) // buyCar(5000000)
    // this(...args)
}

buyCar.myCall(car, 5000000)
