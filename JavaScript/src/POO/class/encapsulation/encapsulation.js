import { House } from './house';

const house = new House("123 Main St", 3, 2, "blue");
console.log(house.numRooms); //through the getter, read only
house._numRooms = 0;
console.log(house._numRooms);
