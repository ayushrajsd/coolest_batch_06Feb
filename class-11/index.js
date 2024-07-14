function printName(cb1, cb2, cb3){
    // console.log("cb", cb)
    console.log("Shubham")
    console.log("-----------")
    /**
     * calling received callback function
     */
    cb1()
    cb2()
    cb3()
}

function printLastName(){
    console.log('Verma')
}

function printAge(){
    console.log(27)
}

function printAddress(){
    console.log('Delhi')
}

printName(printLastName, printAge, printAddress)
// printName(printAge)


function greet(name){
    return `Hello ${name}` // "hello " + name
}

function farewell(name){
    return `Goodbye ${name}!`
}

function createSalutation(name, fn){
    console.log(fn(name))
}

createSalutation('Shubham', greet)
createSalutation('Shubham', farewell)

var c = 0

function sum(a,b){
    return a + b + c++
}

console.log(sum(2,3))
console.log(sum(2,3))


function calculateAge(birthYear){
    console.log(new Date())
    const currentYear = new Date().getFullYear()
    console.log(currentYear) // 2024
    return currentYear - birthYear // 2024 - 1990 = 34
}

console.log(calculateAge(1990))
console.log(calculateAge(1993))
console.log(calculateAge(1993))
console.log(calculateAge(1993))

function getRandomNumber(){
    return Math.random()
}

console.log(getRandomNumber())
console.log(getRandomNumber())


/**
 * we are guiven an array which has radious of different circles [2,3,4,5,8]
 * we need to find the area and return the result array
 */

// DRY -> Don't Repeat Yourself 

const myRadiusArray = [2,3,4,5,8]

function calculateArea(radiusArr){
   const result = []
   for (let i = 0; i < radiusArr.length; i++) {
       result.push(Math.PI * radiusArr[i] * radiusArr[i])
   }
   return result

}
console.log(calculateArea(myRadiusArray)) // [12.56, 28.27, 50.27, 78.54, 201.06]

function calculateCircumference(radiusArr){
    const result = []
    for (let i = 0; i < radiusArr.length; i++) {
        result.push(2 * Math.PI * radiusArr[i])
    }
    return result
}

console.log(calculateCircumference(myRadiusArray)) // [12.56, 18.85, 25.13, 31.42, 50.27]

function calculateDiameter(radiusArr){
    const result = []
    for (let i = 0; i < radiusArr.length; i++) {
        result.push(2 * radiusArr[i])
    }
    return result
}

console.log(calculateDiameter(myRadiusArray)) // [4, 6, 8, 10, 16]

/**
 * Higher order function 
 */


function circleArea(radius){
    return Math.PI * radius * radius
}

function circleCircumference(radius){
    return 2 * Math.PI * radius
}

function circleDiameter(radius){
    return 2 * radius
}

function calculate(radiusArr, logic){
    const result = []
    for(let i = 0; i < radiusArr.length; i++){
        result.push(logic(radiusArr[i]))
    }
    return result
}

const finalAreas = calculate(myRadiusArray, circleArea)
const finalDiameter = calculate(myRadiusArray, circleDiameter)
const finalCircumference = calculate(myRadiusArray, circleCircumference)

console.log(finalAreas)
console.log(finalDiameter)
console.log(finalCircumference)