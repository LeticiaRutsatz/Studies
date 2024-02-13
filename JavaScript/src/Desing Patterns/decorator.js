
//Decorator is a structural pattern that allows you to attach additional 
//responsibilities to an object dynamically. It is useful when you want to add 
//functionality to existing objects flexibly and without modifying their basic structure

class Coffee {
    cost() {}
}

// Concrete Component
class SimpleCoffee extends Coffee {
    cost() {
        return 10; // Base cost of simple coffee
    }
}

// Decorator
class CoffeeDecorator extends Coffee {
    constructor(coffee) {
        super();
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost();
    }
}

// Concrete Decorator - Milk
class Milk extends CoffeeDecorator {
    constructor(coffee) {
        super(coffee);
    }

    cost() {
        return this.coffee.cost() + 5; // Milk costs $5 more
    }
}

// Concrete Decorator - Sugar
class Sugar extends CoffeeDecorator {
    constructor(coffee) {
        super(coffee);
    }

    cost() {
        return this.coffee.cost() + 2; // Sugar costs $2 more
    }
}

// Usage
let coffee = new SimpleCoffee();
console.log(`Cost of simple coffee: $${coffee.cost()}`);

coffee = new Milk(coffee); // Adding milk
console.log(`Cost of coffee with milk: $${coffee.cost()}`);

coffee = new Sugar(coffee); // Adding sugar
console.log(`Cost of coffee with milk and sugar: $${coffee.cost()}`);
