// setTimeout
// How to use setTimeout, clearTimeout, setInterval and clearInterval

function lag(msg){
    console.log('MESSAGE', msg);
    clearInterval(hasan);
}
setTimeout(lag , 2000 , 'Hello');

// setTimeout runs once 
// setInterval runs again and agian and again........

let hasan = setInterval(lag , 500 , 'You');

