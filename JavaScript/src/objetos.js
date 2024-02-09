//normal object
const home = {
    window: 4,
    door: 2,
    rooms: 4,
    bathroom: 1
};


//acesing properties
home.door;
home['door'];

////////////////////////////////////

//deleting properties
delete home.door;
delete home['door'];

////////////////////////////////////

//Object.preventExtensions
const object1 = {};
object1.a = 1234;

Object.preventExtensions(object1); //prevents new properties from ever being added to an object
console.log(object1);

////////////////////////////////////

//Object.keys()
console.log(Object.keys(home)); //returns an array of a given object's own enumerable string-keyed property names
//[ 'window', 'door', 'rooms', 'bathroom' ]

////////////////////////////////////

//Object.values()
const object1 = {
  a: 'somestring',
  b: 42,
  c: false,
};

console.log(Object.values(object1));
// Expected output: Array ["somestring", 42, false]

////////////////////////////////////

//Object.defineProperty()
const obj = {counter : 0};

Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});

obj.reset;
obj.add = 5;

////////////////////////////////////

//Object Prototypes
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

//adding a new property
Person.prototype.nationality = "English";

////////////////////////////////////

//Object create
const amanda = {
    isHuman: true,
    age: 50
};

const me = Object.create(amanda);
me.name = 'Amanda'; // "name" is a property set on "me", but not on "amanda"

////////////////////////////////////

//Object.entries
const object2 = {
  a: 'somestring',
  b: 42,
};

for (const [key, value] of Object.entries(object2)) {
  console.log(`${key}: ${value}`);
}
// Expected output:
// "a: somestring"
// "b: 42"

////////////////////////////////////

//Object.getOwnPropertyNames()
const object3 = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(Object.getOwnPropertyNames(object3));
// Expected output: Array ["a", "b", "c"]

////////////////////////////////////


//Object.is() - determines whether two values are the same value
console.log(Object.is('1', 1));
// Expected output: false


////////////////////////////////////