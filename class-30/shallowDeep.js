const zoo = {
name:"Amazing Zoo",
location:"Melbourne, Australia",
animals:[
    {
        species: "Lion",
        favoriteTreat:'🍔'
    },
    {
        species:'Panda',
        favoriteTreat:'🍀'
    }
],
greet: function(){
    console.log(`Welcome to ${this.name}!`)
}
}

const shallowCopy = {...zoo} // spread operator creates a shallow copy of the object
shallowCopy.location = "KErala, India"

shallowCopy.animals[0].favoriteTreat = "🍗"

// console.log(zoo.animals)
// console.log(shallowCopy.animals)
// console.log(zoo === shallowCopy) // false because they are different objects pointing to different memory locations
// console.log(2 === '2') // false because one is a number and the other is a string
// console.log(2 == '2') // true because the values are the same
// /**
//  *  in case of == type coercion is done and then value is compared but in case of === type coercion is not done and then value is compared
//  */


// Deep Copy is done using JSON.parse(JSON.stringify(object))

const zooString = JSON.stringify(zoo)
console.log(zooString)
const deepCopy = JSON.parse(zooString)
console.log(deepCopy)
// deepCopy.animals[0].favoriteTreat = "🍔"
// console.log(zoo.animals)
// console.log(deepCopy.animals)
// console.log(zoo.animals === deepCopy.animals) // false because they are different objects pointing to different memory locations

