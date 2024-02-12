export class Vehicle {
  constructor(name) {
    this.name = name;
  }

  start() {
    console.log(`${this.name} starts its engine.`);
  }

  stop() {
    console.log(`${this.name} stops its engine.`);
  }
}