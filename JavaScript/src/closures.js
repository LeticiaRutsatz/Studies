// Closures (or closures) in JavaScript are an important concept that refers to the ability 
// of a function to "remember" the scope in which it was created, even if it is performed 
// outside of that scope. This means that a function in JavaScript can access variables from 
// its own scope, as well as variables in the higher scope (the scope where the function was 
// defined) and even global variations.

function init(){
    const name = "Uma String";
    function showName(){
        console.log(name);
    }
    showName();
}

const myFunction = init();
myFunction();

//https://www.youtube.com/watch?v=xME2TcbxiNo