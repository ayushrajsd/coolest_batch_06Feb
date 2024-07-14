function Pizza(toppings, size, crustType){ // Constructor function
    this.toppings = toppings;
    this.size = size;
    this.crustType = crustType;

    this.describe = function(){
        // place an order for fizza
        // make a netwrok call to the server
        console.log(`A ${this.size} pizza with ${this.toppings.join(", ")} on a ${this.crustType} crust.`);
    }
}

const customerOrder1 = new Pizza(["cheese", "pepperoni"], "medium", "thin");
customerOrder1.describe();

const customerOrder2 = new Pizza(["mushrooms", "onions", "peppers"], "large", "thick");
customerOrder2.describe();
