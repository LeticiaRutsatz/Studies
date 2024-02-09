//add export to use this class in other files
export class House {
    //getters and setters
    get numRooms() {
        return this.numFloors;
    }
    
    constructor(address, numRooms, numFloors, color) {
        this.address = address;
        this._numRooms = numRooms; //_ means that is private, but just be priva at TS
        this.numFloors = numFloors;
        this.color = color;
        this.isLocked = true; 
    }

    //metods
    unlock() {
        this.isLocked = false;
        console.log("The house was unlocked.");
    }

    lock() {
        this.isLocked = true;
        console.log("The house was locked.");
    }

    describe() {
        console.log(`Addres: ${this.address}`);
        console.log(`Number off rooms: ${this.numRooms}`);
        console.log(`Number of floors: ${this.numFloors}`);
        console.log(`Color: ${this.color}`);
        console.log(`The house is ${this.isLocked ? 'Locked' : 'Unlocked'}.`);
    }
}

//create a instance of the class
const myHouse = new House("123 Main St", 3, 2, "blue");
//use the metods
myHouse.describe();
myHouse.unlock(); 
