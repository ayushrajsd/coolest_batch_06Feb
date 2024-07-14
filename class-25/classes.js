// class MyClass{
//     constructor(name){
//         this.name = name; // initializing all the properties
//     }
//     static myStaticMethod(){
//         console.log("This is a static method");
//     } 
//     myMethod(){
//         //method implementation
//     }
// }

// MyClass.myStaticMethod(); // This is a static method

class Pizza{
    static totalPizzasMade = 0; // static property to keep count of total pizzas made
    #toppings; // private property
    #size;
    #crustType;
    constructor(toppings, size, crustType){
        this.#toppings = toppings;
        this.#size = size;
        this.#crustType = crustType;
        Pizza.totalPizzasMade++; // increment the totalPizzasMade count
    }
    describe(){
        console.log(`A ${this.#size} pizza with ${this.#toppings.join(", ")} on a ${this.#crustType} crust.`);
    }

    static calculateTotakPizzasMade(){
        console.log(`Total pizzas made: ${Pizza.totalPizzasMade}`);
    
    }
}

const customerOrder1 = new Pizza(["cheese", "pepperoni"], "medium", "thin");
// customerOrder1.describe();

// const customerOrder2 = new Pizza(["mushrooms", "onions", "peppers"], "large", "thick");
// customerOrder2.describe();

class StuffedCrustPizza extends Pizza{
    #stuffingtype; // private property
    constructor(topings, size, crustType, stuffingtype){
        super(topings, size, crustType); // call the parent clkass constructor with super
        this.#stuffingtype = stuffingtype; // new property specific to the child class
    }

    describeStuffing(){
        console.log(`This pizza has a ${this.#stuffingtype} stuffing in the crust`);
    }

    describe(){ // overriding the parent class method
        super.describe(); // call the parent class method
        this.describeStuffing(); // call the child class method

    }
}

const specialOrder = new StuffedCrustPizza(["cheese", "pepperoni"], "medium", "thin", "cheese and tikki");
// specialOrder.describe();

const specialOrder2 = new StuffedCrustPizza(["mushrooms", "onions", "peppers"], "large", "thick", "cheese and tikki");

// Pizza.calculateTotakPizzasMade(); // Total pizzas made: 3
specialOrder2.describe();
console.log(specialOrder2.toppings) // undefined
