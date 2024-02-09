//add export to use this class in other files
export class Counter {
    constructor(value) {
        this.value = value;
    }

    //metods
    reset() {
        this.value = 0;
        console.log("reset: " + this.value);
    }

    incremet() {
        this.value += 1;
        console.log("incremet: " + this.value);
    }

    decrement() {
        this.value -= 1;
        console.log("decrement: " + this.value);
    }
}

//create a instance of the class
const counter = new Counter(3);
//use the metods
counter.incremet();
counter.decrement(); 
