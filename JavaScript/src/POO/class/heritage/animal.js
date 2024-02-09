export class Animal {
    constructor(species, sound) {
        this.species = species;
        this.sound = sound;
    }

    makeSound() {
        console.log(`${this.species} makes a sound: ${this.sound}`);
    }
}
