import { Vehicle } from "./vehicle";

class Motorcycle extends Vehicle {
  drive() {
    console.log(`${this.name} moves on two wheels.`);
  }

  start() {
    super.start();
    console.log(`${this.name} kicks the starter.`);
  }
}