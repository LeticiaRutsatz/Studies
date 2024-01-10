const data = [
    { name: "John", age: 25, salary: 50000, activity: "Programmer", team: "Corinthians" },
    { name: "Maria", age: 30, salary: 60000, activity: "Engineer", team: "Palmeiras" },
    { name: "Peter", age: 28, salary: 55000, activity: "Designer", team: "São Paulo" },
    { name: "Anna", age: 22, salary: 45000, activity: "Student", team: "Flamengo" },
    { name: "Carlos", age: 35, salary: 70000, activity: "Manager", team: "Vasco da Gama" }
];

//find - returns just the first item
const user = data.find((user) => {
    return user.age >= 25;
});

//filter - returns all that matchs
const salary = data.find((user) => {
    return user.salary >= 45000;
});

//findIndex - return the position on array about the condition
const indexUser = data.findIndex((user) => {
    return user.name === "Carlos";
});

//map - iterate the itens without modify the original array (returns a new array)
const users = data.map((user, index) => {
    return 'Olá ' + user.name;
});

//Some - verify if have at least one, return a boolean
const userActivity = data.some((user) => {
    return user.activity === "Designer";
});

//Every - verify if all items return true for the condition
const userActivityEvery = data.every((user) => {
    return user.activity === "Designer";
});

//Reduce - return the some or redution 
const salarys = data.reduce((total, user) => {
    return total += user.salary
}, 0); //initial value for total