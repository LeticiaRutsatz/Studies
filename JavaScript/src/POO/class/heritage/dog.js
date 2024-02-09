import { Animal } from './animal.js'

class Dog extends Animal {
    constructor(breed, color) {
        super('Dog', 'bark'); //super calls the parent class constructor
        this.breed = breed;
        this.color = color;
    }

    describe() {
        console.log(`This ${this.color} ${this.breed} dog likes to bark.`);
    }
}

const myDog = new Dog('Labrador', 'Black');
myDog.makeSound(); 
myDog.describe(); 