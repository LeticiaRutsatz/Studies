import { Vehicle } from "./vehicle";

class Car extends Vehicle {
  drive() {
    console.log(`${this.name} moves on four wheels.`);
  }

  start() {
    super.start();
    console.log(`${this.name} revs the engine.`);
  }
}