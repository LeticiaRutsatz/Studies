//create a promisse
const myPromise = new Promise((resolve, reject) => {
    const name = "Letícia";

    if(nome === "Letícia"){
        resolve("USER FOUND!")
    }else{
        reject("USER NOT FOUND!")
    }
});

myPromise.then((data) => {
    console.log(data);
});

//Encadeamento de thens
const myPromise2 = new Promise((resolve, reject) => {
    const name = "Letícia";

    if(nome === "Letícia"){
        resolve("USER FOUND!")
    }else{
        reject("USER NOT FOUND!")
    }
});

myPromise2
.then((data) => {
    return data.toLowerCase();
}).then((stringModified) => {
    console.log(stringModified);
});

//catch
const myPromise3 = new Promise((resolve, reject) => {
    const name = "Maria";

    if(nome === "Letícia"){
        resolve("USER FOUND!")
    }else{
        reject("USER NOT FOUND!")
    }
});

myPromise3
.then((data) => {
    return data.toLowerCase();
}).catch((err) => {
    console.log(`An error occurred: ${err}`);
});

//Promisse.all - resolve just if all promisses has been resolved
const p1 = new Promise((resolve, reject) => {
    resolve('P1 ok!')
});

const p2 = new Promise((resolve, reject) => {
    resolve('P2 ok!')
});

const p3 = new Promise((resolve, reject) => {
    resolve('P3 ok!')
});

const resolveAll = Promise.all([p1, p2, p3]).then((data) => { //wait all promisses resolve to return
    console.log(data);
});

//Promisse.allSettled - resolve when all promisses have a result (can be positive or negative)
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, 'foo'),
);
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status)),
);


//Promisse.race - return the firt promisse that will be resolved
const p4 = new Promise((resolve, reject) => { 
    setTimeout(() => {
        resolve('P4 ok!')
    }, 2000)
});

const p5 = new Promise((resolve, reject) => {
    resolve('P5 ok!')
});

const p6 = new Promise((resolve, reject) => {
    resolve('P6 ok!')
});

const resolveAllRace = Promise.race([p4, p5, p6]).then((data) => {
    console.log(data);
});

//Promisse.any - returns a single Promise from a list of promises, when any promise fulfill
const p7 = new Promise((resolve, reject) => { 
    setTimeout(() => {
        resolve('P7 ok!')
    }, 2000)
});

const p8 = new Promise((resolve, reject) => {
    resolve('P8 ok!')
});

const p9 = new Promise((resolve, reject) => {
    resolve('P9 ok!')
});

const resolveAny = Promise.any([p7, p8, p9]).then((data) => {
    console.log(data);
});