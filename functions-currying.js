
// Function Currying
//In JavaScript, functions are first-class objects, 
// just like String, Number, Boolean
//This means that they can be passed to functions or returned from functions

function greet(msg){
    return function (name){
        console.log(msg , name);
    }
}
let english = greet(" Hi ");
let spainish = greet(' Hola ');
let deutsch = greet(' Tag ');

english('Tom');
spainish('Sergio');
deutsch('Van');