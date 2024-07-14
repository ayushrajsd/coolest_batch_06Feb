const person1 = {
    name:"Mr. X",
    age:25,
    printNameAndAge: function(){
        // console.log(this)
        // console.log(`My name is ${this.name} and I am ${this.age} years old and I live in ${location} and country is ${country}`);
         console.log(`My name is ${this.name} and I am ${this.age} years old`);
    }
}

// person1.printNameAndAge("New York")

const person2 = {
    name:"Mr. Y",
    age:30
}
person1.printNameAndAge.call(person2, "San Fransisco","USA")