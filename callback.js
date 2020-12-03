// Callback functions
//built-in callback functions :
//setTimeout, Arr.forEach, geolocation.getCurrentPosition
//make your own callback functions

function thing(other){
    let x = 8;
    let name = 'Yasser';
    other(name);
}
function hello(nm){
    console.log('Hello', nm);
}
thing(hello);